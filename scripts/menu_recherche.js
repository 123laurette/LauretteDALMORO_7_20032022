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
            ulIngredients.appendChild(liIngredients);
        });
        return liIngredients;
    }
}
//OUVERTURE DE LA LISTE INGREDIENTS
const open = document.querySelector(".fa-chevron-down");
const openListe = document.querySelector(".liste_ingredients");

open.addEventListener("click", openListeIngredient);

function openListeIngredient(){
    open.style.display = "none";
    openListe.style.display = "block";
} 
    
//FERMETURE DE LA LISTE INGREDIENTS
const closeListe = document.querySelector(".fa-chevron-up");

closeListe.addEventListener("click", closeListeIngredient);

function closeListeIngredient(){
    open.style.display = "block";
    openListe.style.display = "none";
} 



/*creaListAppareilsDom() {
    const ulAppareils = document.createElement("ul");
    ulAppareils.classList.add("appareils");

    const appareils = this.appliance;

    appareils.forEach(appareil => {
        const liAppareils = document.createElement("li");
        liAppareils.textContent = appareil;
        ulAppareils.appendChild(liAppareils);
    });
    return ulAppareils;
}

creaListUstensilesDom() {
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

