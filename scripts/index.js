

function displayListe (recette) {
    creaIngredientsDom(recette);
    const creaUstensile = creaUstensilesDom(recette);
    const creaAppareil = creaAppareilsDom(recette);

    //ulIngredients.appendChild(creaIngredient);
    //ulUstensiles.appendChild(creaUstensile);
    //ulAppareils.appendChild(creaAppareil)
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
    displayRecette(recette);
    displayListe(recette)
}

init ();


