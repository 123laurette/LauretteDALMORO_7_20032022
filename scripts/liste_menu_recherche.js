let tabIngredients = [];
let tabUstensiles = [];
let tabAppareils = [];

// ......LISTES INPUT PUSH ARRAY, SUPP DOUBLONS ET TRIE.....
function creaListeFiltre(recettes) {
    recettes.forEach(recette => {
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

function creaListeDom(){
    //........je crée un UL et des LI pour chaque element.............
    const ingredientsDiv = document.getElementById("ingredients_div");
    let ulIngredients = document.createElement("ul");
    ulIngredients.id = "ingredients";

    tabIngredients.forEach(ingredient => {
        const liIngredients = document.createElement("li");
        liIngredients.innerHTML = ingredient;
        liIngredients.value = ingredient;
        ulIngredients.appendChild(liIngredients);
    });
    ingredientsDiv.appendChild(ulIngredients);

    const ustensilesDiv = document.getElementById("ustensiles_div");
    let ulustensiles = document.createElement("ul");
    ulustensiles.id = "ustensiles";
    tabUstensiles.forEach(ustensile => {
        const liUstensile = document.createElement("li");
        liUstensile.innerHTML = ustensile;
        liUstensile.value = ustensile;
        ulustensiles.appendChild(liUstensile);
    });
    ustensilesDiv.appendChild(ulustensiles);  

    const appareilsDiv = document.getElementById("appareils_div");
    let ulappareils = document.createElement("ul");
    ulappareils.id = "appareils";
    tabAppareils.forEach(appareil => {
        const liAppareil = document.createElement("li");
        liAppareil.innerHTML = appareil;
        liAppareil.value = appareil;
        ulappareils.appendChild(liAppareil);
    });
    appareilsDiv.appendChild(ulappareils);              
}



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
    






