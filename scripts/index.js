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

function displayRecetteListe (recettes) {
    recettes.forEach(recette => {
        const creaDataListe = new dataRecherche(recette);
        console.log(creaDataListe);
        const creaIngredient = creaDataListe.creaListIngredientsDom();
        //const creaAppareil = creaIngredient.creaListAppareilsDom();
        //const creaUstensile = creaAppareil.creaListUstensilesDom();
        ulIngredients.appendChild(creaIngredient);
    });
}

function displayListe (){
    const recette = recipes;
    displayRecetteListe(recette);
}
displayListe();