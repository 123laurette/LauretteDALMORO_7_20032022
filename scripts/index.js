

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