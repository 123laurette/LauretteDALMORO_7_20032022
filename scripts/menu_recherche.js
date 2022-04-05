



// ......INGREDIENTS PUSH ARRAY, SUPP DOUBLONS ET TRIE, CREA LI PAR ELEMENT.....

    function creaIngredientsDom(recettes) {
        let tabIngredients = [];

        recettes.forEach(recette => {
            recette.ingredients.map((ingredient) => {
                tabIngredients.push(ingredient.ingredient);//Je fais mon tableau
            });
        });
        tabIngredients = [...new Set (tabIngredients)].sort();//Je trie pour supp les doublons
            console.log(tabIngredients);
        //........je crée un li pour chaque element.............
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

    }


    // ......USTENSILES PUSH ARRAY, SUPP DOUBLONS ET TRIE, CREA LI PAR ELEMENT.....
    function creaUstensilesDom(recettes) {
        let tabUstensiles = [];

        recettes.forEach(recette => {
            recette.ustensils.map((ustensile) => {
                tabUstensiles.push(ustensile);
            });
        });

        tabUstensiles = [...new Set (tabUstensiles)].sort();

        //........je crée un li pour chaque element.............
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
    }

    // ......APPAREILS PUSH ARRAY, SUPP DOUBLONS ET TRIE, CREA LI PAR ELEMENT.....

    function creaAppareilsDom(recettes) {
        let tabAppareils = [];
        
        recettes.forEach(recette => {
            tabAppareils.push(recette.appliance);
        });

        tabAppareils = [...new Set (tabAppareils)].sort();

        //........je crée un li pour chaque element.............
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






//OUVERTURE DES LISTES
const openBleu = document.getElementById("bleu-down");
const openVert = document.getElementById("vert-down");
const openRouge = document.getElementById("rouge-down");
const btnVert = document.querySelector(".btn_appareils");
const btnRouge = document.querySelector(".btn_ustensiles");


const openListeBleu = document.querySelector(".liste_ingredients");
const openListeVert = document.querySelector(".liste_appareils");
const openListeRouge= document.querySelector(".liste_ustensiles");

openBleu.addEventListener("click", openListeIngredients);

function openListeIngredients(){
    openBleu.style.display = "none";
    openListeBleu.style.display = "block";
    btnVert.style.transform = "translateX(350px)";
    btnRouge.style.transform = "translateX(300px)";

}
openVert.addEventListener("click", openListeAppareils);

function openListeAppareils(){
    openVert.style.display = "none";
    openListeVert.style.display = "block";
    btnRouge.style.transform = "translateX(370px)";

} 
openRouge.addEventListener("click", openListeUstensiles);

function openListeUstensiles(){
    openRouge.style.display = "none";
    openListeRouge.style.display = "block";
}
    
    
//FERMETURE DES LISTES
const closeBleu = document.getElementById("bleu-up");
const closeVert = document.getElementById("vert-up");
const closeRouge = document.getElementById("rouge-up");

closeBleu.addEventListener("click", closeListeIngredients);
closeVert.addEventListener("click", closeListeAppareils);
closeRouge.addEventListener("click", closeListeUstensiles);

function closeListeIngredients(){
    openBleu.style.display = "block";
    openListeBleu.style.display = "none"; 
    btnVert.style.transform = "translateX(0)";
    btnRouge.style.transform = "translateX(0)"; 
}
function closeListeAppareils(){
    openVert.style.display = "block";
    openListeVert.style.display = "none";
    btnRouge.style.transform = "translateX(0)";

}
function closeListeUstensiles(){
    openRouge.style.display = "block";
    openListeRouge.style.display = "none";
}
    






