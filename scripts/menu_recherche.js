
class dataRecherche {
    constructor(data) {
        this.ingredients = data.ingredients
        this.appliance = data.appliance
        this.ustensils = data.ustensils
    }
    

    creaListIngredientsDom() {
        const ulIngredients = document.createElement("ul");
        ulIngredients.classList.add("ingredients");

        const ingredients = this.ingredients;
        console.log(ingredients);

        ingredients.forEach(ingredient => {
            const liIngredients = document.createElement("li");
            liIngredients.textContent = ingredient.ingredient;
            ulIngredients.appendChild(liIngredients);
        });
        return ulIngredients;
    }

}

const btnIngredients = document.querySelector(".btn_ingredients");

function displayRecetteListe (recettes) {
    recettes.forEach(recette => {
        const creaDataListe = new dataRecherche(recette);
        const creaIngredient = creaDataListe.creaListIngredientsDom();
        //const creaAppareil = creaIngredient.creaListAppareilsDom();
        //const creaUstensile = creaAppareil.creaListUstensilesDom();
        btnIngredients.appendChild(creaIngredient);
    });
}

function displayListe (){
    const recette = recipes;
    console.log(recette);
    displayRecetteListe(recette);
}
displayListe();



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

