function displayListe (recette) {
    creaIngredientsDom(recette);
    creaUstensilesDom(recette);
    creaAppareilsDom(recette);
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


