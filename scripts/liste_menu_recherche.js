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
        li.value = el;
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
            <li>${el}</li>`
        )

        document.getElementById(id).innerHTML = suggestion;

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

function closeTag() {
    ulTag.style.opacity = 0;
}
function creaTagDomIng (e){
    ulTag.style.opacity = 1;

    const liTag = document.createElement("li");
    liTag.style.backgroundColor = "#3282F7";

    const spanTag = document.createElement("span");
    const iTag = document.createElement("i");
    iTag.className = "far fa-times-circle";
    iTag.onclick = closeTag;
    spanTag.innerHTML = e.target.textContent; //precise que c'est l'élément cliqué qui doit apparaitre

    liTag.appendChild(spanTag);
    liTag.appendChild(iTag);

    ulTag.appendChild(liTag);
    e.target.style.visibility = "hidden"; //permet de supp de la liste une fois selectionné
}

function creaTagDomApp (e){
    ulTag.style.opacity = 1;

    const liTag = document.createElement("li");
    liTag.style.background = "#68D9A4";

    const spanTag = document.createElement("span");
    const iTag = document.createElement("i");
    iTag.className = "far fa-times-circle";
    iTag.onclick = closeTag;

    spanTag.innerHTML = e.target.textContent;

    liTag.appendChild(spanTag);
    liTag.appendChild(iTag);

    ulTag.appendChild(liTag);
    e.target.style.visibility = "hidden";    
}

function creaTagDomUst (e){
    ulTag.style.opacity = 1;

    const liTag = document.createElement("li");
    liTag.style.backgroundColor = "#ED6454";

    const spanTag = document.createElement("span");
    const iTag = document.createElement("i");
    iTag.className = "far fa-times-circle";
    iTag.onclick = closeTag;

    spanTag.innerHTML = e.target.textContent;

    liTag.appendChild(spanTag);
    liTag.appendChild(iTag);

    ulTag.appendChild(liTag);
    e.target.style.visibility = "hidden";    
}


divListeing.addEventListener("click", creaTagDomIng, false);
divListeApp.addEventListener("click", creaTagDomApp, false);
divListeUst.addEventListener("click", creaTagDomUst, false);


            









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
    






