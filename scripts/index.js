//Renseigne la fonction creaListeDom pour les paramètres
function displayListe (recette) {
    creaListeFiltre(recette);
    creaListeDom(tabIngredients, "ingredients");
    creaListeDom(tabAppareils,  "appareils");
    creaListeDom(tabUstensiles,  "ustensiles");
}

//Renseigne la fonction filtreBtn pour les paramètres
function displayFiltreBtn (){
    filtreBtn(tabIngredients, "ingredients");
    filtreBtn(tabAppareils,  "appareils");
    filtreBtn(tabUstensiles,  "ustensiles");
}




var cartesRecettes = document.querySelector(".cartes_recettes");

//Message en cas de recette non trouvée
function pasDeRecette(){
    cartesRecettes.innerHTML = "";

    const divnull = document.createElement("div");
    divnull.id = "pas_de_recette";
    divnull.textContent = 'Aucune recette ne correspond à vos critères, veuillez modifier votre recherche svp. Vous pouvez chercher "tarte aux pommes", "poisson", etc...';
    cartesRecettes.appendChild(divnull);
}

function displayRecette (recettes) {
    cartesRecettes.innerHTML = "";

    recettes.forEach(recette => {
        const creaData = new dataRecettes(recette);
        const creaCarte = creaData.creaCarteDom();
        cartesRecettes.appendChild(creaCarte);
    });
}

var recettes = recipes;

function init () {
    displayRecette(recettes);
    displayListe(recettes);
    displayFiltreBtn();
}

init ();












