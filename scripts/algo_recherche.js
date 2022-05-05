
//          ALGO OPTION 1 BARRE PRINCIPALE

const barreChamp = document.getElementById("barre_champ");
let resultat = [];

function filtreBarre(){
    const inputBarre = barreChamp.value;
    if (inputBarre.length >= 3){
        resultat = recettes.filter(recette => recette.name.toLowerCase().includes(inputBarre.toLowerCase()) || recette.description.toLowerCase().includes(inputBarre.toLowerCase()) || 
        recette.ingredients.forEach ((ingredient) => {ingredient.ingredient.toLowerCase().includes(inputBarre.toLowerCase())}));
        recettes = resultat;
    }else{

        resultat = recettes;
    }
    displayRecette(resultat);
    displayListe(resultat);
    
}

barreChamp.addEventListener("input", filtreBarre)






















