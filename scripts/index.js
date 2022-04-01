const cartesRecettes = document.querySelector(".cartes_recettes");

function displayRecette (recettes) {
    recettes.forEach(recette => {
        const creaData = new dataRecettes(recette);
        const creaCarte = creaData.creaCarteDom();
        cartesRecettes.appendChild(creaCarte);
    });
}


function display () {
    const recette = recipes;
    displayRecette(recette);
}

display ();


const ulIngredients = document.querySelector(".ingredients");
const ulAppareils = document.querySelector(".appareils");
const ulUstensiles = document.querySelector(".ustensiles");


function displayRecetteListe (recettes) {
    recettes.forEach(recette => {
        const creaDataListe = new dataRecherche(recette);
        console.log(creaDataListe);
        const creaIngredient = creaDataListe.creaListIngredientsDom();
        const creaAppareil = creaDataListe.creaListAppareilsDom();
        const creaUstensile = creaDataListe.creaListUstensilesDom();
        ulIngredients.appendChild(creaIngredient);
        ulAppareils.appendChild(creaAppareil);
        ulUstensiles.appendChild(creaUstensile);
    });
}

function displayListe (){
    const recette = recipes;
    displayRecetteListe(recette);
}
displayListe();