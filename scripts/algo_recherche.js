
//          ALGO OPTION 1 BARRE PRINCIPALE

const barreChamp = document.getElementById("barre_champ");
let resultat = [];

function filtreBarre(){
    const inputBarre = barreChamp.value;
    if (inputBarre.length >= 3){
        resultat = recettes.filter(recette => recette.name.toLowerCase().includes(inputBarre.toLowerCase()) || recette.description.toLowerCase().includes(inputBarre.toLowerCase()) || 
        recette.ingredients.forEach ((ingredient) => {ingredient.ingredient.toLowerCase().includes(inputBarre.toLowerCase())}));
    }else{
        resultat = recettes;
    }
    displayRecette(resultat);
    displayListe(resultat);
    
}

barreChamp.addEventListener("input", filtreBarre)




//   A FAIRE
//suppresion des tags les uns indépendamment des autres
//liaison entre le choix dans les btn et l'apparition des recettes
//factoriser le code apparition des tags selectionnes
//reset des choix btn tags et remise en place de la totalité de la liste



//ET APRES L'OPTION 2 !!!!


















