class dataRecherche {
    constructor(data) {
        this.ingredients = data.ingredients
        this.appliance = data.appliance
        this.ustensils = data.ustensils
    }

    // ......INGREDIENTS PUSH ARRAY, SUPP DOUBLONS ET TRIE, CREA LI PAR ELEMENT.....
    creaIngredientsDom(recettes) {
        let tabIngredients = [];

        recettes.forEach(recette => {
            recette.ingredients.map((ingredient) => {
                tabIngredients.push(ingredient.ingredient);//Je fais mon tableau
            });
        });
        tabIngredients = [...new Set (tabIngredients)].sort();//Je trie pour supp les doublons
            
        //........je crée un li pour chaque element.............
        tabIngredients.forEach(ingredient => {
            const liIngredients = document.createElement("li");
            liIngredients.textContent = ingredient;
                console.log(liIngredients);
        })
        
    }

    // ......USTENSILES PUSH ARRAY, SUPP DOUBLONS ET TRIE, CREA LI PAR ELEMENT.....
    creaUstensilesDom(recettes) {
        let tabUstensiles = [];
        recettes.forEach(recette => {
            recette.ustensils.map((ustensile) => {
                tabUstensiles.push(ustensile);
            });
        });

        tabUstensiles = [...new Set (tabUstensiles)].sort();

        //........je crée un li pour chaque element.............

        tabUstensiles.forEach(ustensile => {
            const liUstensiles = document.createElement("li");
            liUstensiles.textContent = ustensile;
            console.log(liUstensiles);
        })        
    }

    // ......APPAREILS PUSH ARRAY, SUPP DOUBLONS ET TRIE, CREA LI PAR ELEMENT.....

    creaAppareilsDom(recettes) {
        let tabAppareils = [];
        recettes.forEach(recette => {
            tabAppareils.push(recette.appliance);
        });

        tabAppareils = [...new Set (tabAppareils)].sort();

        //........je crée un li pour chaque element.............
        tabAppareils.forEach(appareil => {
            const liAppareils = document.createElement("li");
            liAppareils.textContent = appareil;
            console.log(liAppareils);
        })
        
    }
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
    btnVert.style.transform = "translateX(450px)";
    btnRouge.style.transform = "translateX(400px)";

}
openVert.addEventListener("click", openListeAppareils);

function openListeAppareils(){
    openVert.style.display = "none";
    openListeVert.style.display = "block";
    btnRouge.style.transform = "translateX(470px)";

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
    






