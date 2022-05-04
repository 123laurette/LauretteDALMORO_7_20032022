let tabIngredients;
let tabUstensiles;
let tabAppareils;

//          CREATION DES TABLEAUX BOUTONS FILTRE

function creaListeFiltre(recettesParam) {
    tabIngredients = [];
    tabUstensiles = [];
    tabAppareils = [];

    recettesParam.forEach(recette => {
        //Je fais mon tableau
        recette.ingredients.map((ingredient) => {
            tabIngredients.push(ingredient.ingredient);
        });
        recette.ustensils.map((ustensile) => {
            tabUstensiles.push(ustensile);
        });
        tabAppareils.push(recette.appliance);
    });

    //Je trie pour supp les doublons    
    tabIngredients = [...new Set (tabIngredients)].sort();
    tabUstensiles = [...new Set (tabUstensiles)].sort();
    tabAppareils = [...new Set (tabAppareils)].sort();

}

//          CREATION DES LISTES BOUTONS FILTRE

function creaListeDom(tabTag, id){
    //........je crée un UL et des LI generique.............
    const divListe = document.getElementById(id + "_div");
    divListe.innerHTML = "";

    const ul = document.createElement("ul");
    ul.id = id;

    divListe.appendChild(ul);

    tabTag.forEach(el => {
        const li = document.createElement("li");
        li.className = "li_" + id;
        li.innerHTML = el;
        ul.appendChild(li)
    });
}


//              RECHERCHE AVEC BOUTON FILTRE
let suggestion = "";

function filtreBtn(tabTag, id){
    const inputBtn = document.getElementById("input_" + id);

    const inputBarre = inputBtn.value;

    //Je filtre en fonction des 3 caractères saisis
    if(inputBarre.length >= 3) {
        const resultFiltre = tabTag.filter(el => el.toLowerCase().includes(inputBarre.toLowerCase()));
        
        suggestion = "";
        //Je parcour le tableau de resultat et j'affiche les suggestions
        resultFiltre.forEach(el =>
            suggestion += `
            <li class = li_choix_${id}, value = "${el}">${el}</li>`
        )

        document.getElementById(id).innerHTML = suggestion;
        console.log(suggestion);
        
    }else{
        creaListeDom(tabTag, id);
    }
    inputBtn.addEventListener("input", displayFiltreBtn);

}

//      APPARITION DES TAGS SELECTIONNES 
// construction de la zone tag selectionne

const divListeing = document.getElementById("ingredients_div");
const divListeApp = document.getElementById("appareils_div");
const divListeUst = document.getElementById("ustensiles_div");
const ulTag = document.getElementById("tag");


function creaTagDomIng (e){

    const litag = document.createElement("li");
    litag.style.backgroundColor = "#3282F7";

    const spanTag = document.createElement("span");
    const iTag = document.createElement("i");
    iTag.className = "far fa-times-circle";
    spanTag.innerHTML = e.target.textContent;

    litag.appendChild(spanTag);
    litag.appendChild(iTag);

    ulTag.appendChild(litag);
    
}

function creaTagDomApp (e){

    const litag = document.createElement("li");
    litag.style.background = "#68D9A4";

    const spanTag = document.createElement("span");
    const iTag = document.createElement("i");
    iTag.className = "far fa-times-circle";

    spanTag.innerHTML = e.target.textContent;

    litag.appendChild(spanTag);
    litag.appendChild(iTag);

    ulTag.appendChild(litag);
}

function creaTagDomUst (e){

    const litag = document.createElement("li");
    litag.style.backgroundColor = "#ED6454";

    const spanTag = document.createElement("span");
    const iTag = document.createElement("i");
    iTag.className = "far fa-times-circle";

    spanTag.innerHTML = e.target.textContent;

    litag.appendChild(spanTag);
    litag.appendChild(iTag);

    ulTag.appendChild(litag);
}


divListeing.addEventListener("click", creaTagDomIng);
divListeApp.addEventListener("click", creaTagDomApp);
divListeUst.addEventListener("click", creaTagDomUst);


//liaison entre les tags et les recettes
const barreTag = document.getElementById("tag");
let resultatTag = [];

function filtreTag(){
    var barreTagValue = barreTag.value;

    if (barreTagValue = true){
        resultatTag = recettes.filter(recette => recette.appliance.toLowerCase().includes(barreTagValue.toLowerCase())) || 

        recette.ustensils.forEach ((ustensile) => {ustensile.toLowerCase().includes(barreTagValue.toLowerCase())}) || 

        recette.ingredients.forEach ((ingredient) => {ingredient.ingredient.toLowerCase().includes(barreTagValue.toLowerCase())});
        recettes = resultatTag;

    }else{

        resultatTag = recettes;
    }
    displayRecette(resultatTag);
    displayListe(resultatTag);
}



//............ESSAI DE REFACTORISATION .............
/*const ulTag = document.getElementById("tag");
var spanTag = "";
var ulListe = [];
var liListe = [];

function creaTagDom (id){
    liListe = document.querySelectorAll(".li_" + id);
    liListe.forEach(e => {
        const liTag = document.createElement("li");
        liTag.className = "li_" + id;
    
        const spanTag = document.createElement("span");
        spanTag.innerHTML = e.textContent; 

        const iTag = document.createElement("i");
        iTag.className = "far fa-times-circle";
    
        liTag.appendChild(spanTag);
        liTag.appendChild(iTag);
    
        ulTag.appendChild(liTag);
    })
}
liListe.addEventListener("click", (e) =>{

});*/
        











            









//....................OUVERTURE DES LISTES
const openBtnIngredient = document.getElementById("ingredients-down");
const openBtnAppareil = document.getElementById("appareils-down");
const openBtnUstensile = document.getElementById("ustensiles-down");
const btnIngredient = document.querySelector(".btn_ingredients");
const btnAppareil = document.querySelector(".btn_appareils");
const btnUstensile = document.querySelector(".btn_ustensiles");
const ListeIngredients = document.querySelector(".liste_ingredients");
const ListeAppareils = document.querySelector(".liste_appareils");
const ListeUstensiles= document.querySelector(".liste_ustensiles");

openBtnIngredient.addEventListener("click", openListeIngredients);

function openListeIngredients(){
    openBtnIngredient.style.display = "none";
    ListeIngredients.style.display = "block";
    ListeAppareils.style.display = "none";
    ListeUstensiles.style.display = "none";
    openBtnAppareil.style.display = "block";
    openBtnUstensile.style.display = "block";
    btnAppareil.style.transform = "translateX(350px)";
    btnUstensile.style.transform = "translateX(300px)";
}

openBtnAppareil.addEventListener("click", openListeAppareils);

function openListeAppareils(){
    openBtnAppareil.style.display = "none";
    ListeAppareils.style.display = "block";
    ListeIngredients.style.display = "none";
    ListeUstensiles.style.display = "none";
    openBtnIngredient.style.display = "block";
    openBtnUstensile.style.display = "block";
    btnUstensile.style.transform = "translateX(370px)";
    btnAppareil.style.transform = "translateX(0px)";
}

openBtnUstensile.addEventListener("click", openListeUstensiles);

function openListeUstensiles(){
    openBtnUstensile.style.display = "none";
    ListeUstensiles.style.display = "block";
    ListeIngredients.style.display = "none";
    ListeAppareils.style.display = "none";
    openBtnIngredient.style.display = "block";
    openBtnAppareil.style.display = "block";
    btnAppareil.style.transform = "translateX(-10px)";
}
    
    
//................FERMETURE DES LISTES
const closeIngredient = document.getElementById("ingredients-up");
const closeAppareil = document.getElementById("appareils-up");
const closeUstensile = document.getElementById("ustensiles-up");

closeIngredient.addEventListener("click", closeListeIngredients);

function closeListeIngredients(){
    openBtnIngredient.style.display = "block";
    ListeIngredients.style.display = "none"; 
    btnAppareil.style.transform = "translateX(0)";
    btnUstensile.style.transform = "translateX(0)"; 
}

closeAppareil.addEventListener("click", closeListeAppareils);

function closeListeAppareils(){
    openBtnAppareil.style.display = "block";
    ListeAppareils.style.display = "none";
    btnUstensile.style.transform = "translateX(0)";
}

closeUstensile.addEventListener("click", closeListeUstensiles);

function closeListeUstensiles(){
    openBtnUstensile.style.display = "block";
    ListeUstensiles.style.display = "none";
    btnUstensile.style.transform = "translateX(0)";
}
    






