class dataRecherche {
    constructor(data) {
        this.ingredients = data.ingredients
        this.appliance = data.appliance
        this.ustensils = data.ustensils
    }
    
    creaListIngredientsDom() {
        const ingredients = this.ingredients;
        const liIngredients = document.createElement("li");

        ingredients.forEach(ingredient => {
            liIngredients.textContent = ingredient.ingredient;
        });
        return liIngredients;
    }
    creaListUstensilesDom() {
        const ustensiles = this.ustensils;
        const liUstensiles = document.createElement("li");

        ustensiles.forEach(ustensile => {
            liUstensiles.textContent = ustensile;
        });
        return liUstensiles;
    }
    creaListAppareilsDom() {
        const liAppareils = document.createElement("li");
        liAppareils.textContent = this.appliance;
        return liAppareils;
    }
}




//OUVERTURE DES LISTES
const openBleu = document.getElementById("bleu-down");
const openVert = document.getElementById("vert-down");
const openRouge = document.getElementById("rouge-down");
const btnVert = document.querySelector(".btn_appareils");

const openListeBleu = document.querySelector(".liste_ingredients");
const openListeVert = document.querySelector(".liste_appareils");
const openListeRouge= document.querySelector(".liste_ustensiles");

openBleu.addEventListener("click", openListeIngredients);

function openListeIngredients(){
    openBleu.style.display = "none";
    openListeBleu.style.display = "block";
}
openVert.addEventListener("click", openListeAppareils);

function openListeAppareils(){
    openVert.style.display = "none";
    openListeVert.style.display = "block";
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
}
function closeListeAppareils(){
    openVert.style.display = "block";
    openListeVert.style.display = "none";
}
function closeListeUstensiles(){
    openRouge.style.display = "block";
    openListeRouge.style.display = "none";
}
    




/*creaListUstensilesDom() {
    const ulUstensiles = document.createElement("ul");
    ulUstensiles.classList.add(".ustensiles");

    const ustensiles = this.ustensils;
    console.log(ustensiles);

    ustensiles.forEach(ustensile => {
        const liUstensiles = document.createElement("li");
        liUstensiles.textContent = ustensiles.ustensile;
        ulUstensiles.appendChild(liUstensiles);
    });
    return ulUstensiles;
}*/

