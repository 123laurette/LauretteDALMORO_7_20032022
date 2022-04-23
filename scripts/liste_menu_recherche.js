let tabIngredients;
let tabUstensiles;
let tabAppareils;

// ......LISTES INPUT, PUSH ARRAY, SUPP DOUBLONS ET TRIE.....
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

const inputIngredients = document.getElementById("input_ingredients");
let suggestionIng = "";

function filtreBtnIng(){
    const inputBarreIng = inputIngredients.value;

    //Je filtre en fonction des 3 caractères saisis
    if(inputBarreIng.length >= 3) {
        const resultFiltreIng = tabIngredients.filter(el => el.toLowerCase().includes(inputBarreIng.toLowerCase()));
        suggestionIng = "";
        //Je parcour le tableau de resultat et j'affiche les suggestions
        resultFiltreIng.forEach(el =>
            suggestionIng += `
            <li class="li_ingredients">${el}</li>`
        )
        document.getElementById("ingredients").innerHTML = suggestionIng;
    }else{
        creaListeDom(tabIngredients, "ingredients");
    }
}
inputIngredients.addEventListener("input", filtreBtnIng);


const inputAppareils = document.getElementById("input_appareils");
let suggestionApp = "";


inputAppareils.addEventListener("input", function(){
    const inputBarreApp = inputAppareils.value;
    

    if(inputBarreApp.length >= 3) {
        const resultFiltreApp = tabAppareils.filter(el => el.toLowerCase().includes(inputBarreApp.toLowerCase()));
        suggestionApp = "";

        resultFiltreApp.forEach(el =>
            suggestionApp += `
            <li class="li_appareils">${el}</li>`
        )
        document.getElementById("appareils").innerHTML = suggestionApp;
    }else{
        creaListeDom(tabAppareils,  "appareils");
    }
})

const inputUstensiles = document.getElementById("input_ustensiles");
let suggestionust = "";


inputUstensiles.addEventListener("input", function(){
    const inputBarreUst = inputUstensiles.value;

    if(inputBarreUst.length >= 3) {
        const resultFiltreUst = tabUstensiles.filter(el => el.toLowerCase().includes(inputBarreUst.toLowerCase()));
        suggestionust = "";


        resultFiltreUst.forEach(el =>
            suggestionust += `
            <li class="li_ustensiles">${el}</li>`
        )
        document.getElementById("ustensiles").innerHTML = suggestionust;
    }else{
        creaListeDom(tabUstensiles,  "ustensiles");
    }
})



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
    






