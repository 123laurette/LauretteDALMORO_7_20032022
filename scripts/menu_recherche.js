class dataRecherche {
    constructor(data) {
        this.ingredients = data.ingredients
        this.appliance = data.appliance
        this.ustensils = data.ustensils
    }
        
    creaIngredientsDom(recettes) {
        let tabIngredients = [];
        recettes.forEach((recette) => {
            recette.ingredients.map((element) => {
                tabIngredients.push(element.ingredient);//Je fais mon tableau
            });
        });
        tabIngredients = [...new Set (tabIngredients)].sort();//Je trie pour supp les doublons
            console.log(tabIngredients);


        tabIngredients.forEach((element) =>{
            const liIngredients = document.createElement("li");
            liIngredients.textContent = element;
            return liIngredients;

        });


    }

    creaUstensilesDom(recettes) {
        let tabUstensiles = [];
        recettes.forEach((recette) => {
            recette.ustensils.map((element) => {
                tabUstensiles.push(element);
            });
            
        });

        tabUstensiles = [...new Set (tabUstensiles)].sort();
            console.log(tabUstensiles);
        const liUstensiles = document.createElement("li");
        liUstensiles.textContent = tabUstensiles;

        return liUstensiles;
    }
    creaAppareilsDom(recettes) {
        let tabAppareils = [];
        recettes.forEach((recette) => {
            tabAppareils.push(recette.appliance);
        });

        tabAppareils = [...new Set (tabAppareils)].sort();
            console.log(tabAppareils);
        const liAppareils = document.createElement("li");
        liAppareils.textContent = tabAppareils;

        return liAppareils;
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
    






