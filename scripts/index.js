function displayListe (recette) {
    creaListeFiltre(recette);
    creaListeDom(tabIngredients, "ingredients");
    creaListeDom(tabAppareils,  "appareils");
    creaListeDom(tabUstensiles,  "ustensiles");

}

const cartesRecettes = document.querySelector(".cartes_recettes");

function displayRecette (recettes) {
    cartesRecettes.innerHTML = "";
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










