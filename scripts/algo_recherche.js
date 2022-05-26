
//          ALGO OPTION 1 BARRE PRINCIPALE

const barreChamp = document.getElementById("barre_champ");

//filtre des recettes en relation avec les 3 caractères tapés
function filtreBarre(){
    const inputBarre = barreChamp.value;
    let resultat = [];

    if (inputBarre.length >= 3){

        resultat = recettes.filter(recette => recette.name.toLowerCase().includes(inputBarre.toLowerCase()) || recette.description.toLowerCase().includes(inputBarre.toLowerCase()) ||
        recette.ingredients.some ((ingredient) => ingredient.ingredient.toLowerCase().includes(inputBarre.toLowerCase())));

        
        recettes = resultat; 

        
    }else{
        recettes = recipes;
        filtreTag();
        resultat = recettes;
    }
    if (resultat.length == 0){
        pasDeRecette();
    }else{
        displayRecette(resultat);   //j'affiche le resultat de ce filtre au niveau des recettes
    }
    displayListe(resultat);     //j'affiche le resultat de ce filtre au niveau des listes btn
    
}

barreChamp.addEventListener("input", filtreBarre)




