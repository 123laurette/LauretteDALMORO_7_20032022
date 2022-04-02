
const ulIngredients = document.querySelector(".ingredients");
const ulAppareils = document.querySelector(".appareils");
const ulUstensiles = document.querySelector(".ustensiles");

function displayListe (recette) {
    const creaDataListe = new dataRecherche(recette);
    const creaIngredient = creaDataListe.creaIngredientsDom(recette);
    const creaUstensile = creaDataListe.creaUstensilesDom(recette);
    const creaAppareil = creaDataListe.creaAppareilsDom(recette);

    ulIngredients.appendChild(creaIngredient);
    ulUstensiles.appendChild(creaUstensile);
    ulAppareils.appendChild(creaAppareil)
}


const cartesRecettes = document.querySelector(".cartes_recettes");

function displayRecette (recettes) {
    recettes.forEach(recette => {
        const creaData = new dataRecettes(recette);
        const creaCarte = creaData.creaCarteDom();
        cartesRecettes.appendChild(creaCarte);
    });
}


function init () {
    const recette = recipes;
    displayListe(recette);
    displayRecette(recette);
}

init ();


