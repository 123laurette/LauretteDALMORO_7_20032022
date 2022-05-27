
//  ALGO OPTION 2 BARRE PRINCIPALE

const barreChamp = document.getElementById("barre_champ");


function filtreBarre(){
    const inputBarre = barreChamp.value;
    let resultat = [];
    recettes = recipes;
    
    if (inputBarre.length >= 3){
        
        for (let i = 0; i < recettes.length; i++){
            let ingredientTrouve = false;

            for (let j = 0; j < recettes[i].ingredients.length; j++){
                if(recettes[i].ingredients[j].ingredient.toLowerCase().includes(inputBarre.toLowerCase())){
                    ingredientTrouve = true;
                }
            }
            if(ingredientTrouve || recettes[i].name.toLowerCase().includes(inputBarre.toLowerCase()) || recettes[i].description.toLowerCase().includes(inputBarre.toLowerCase())){
                resultat.push(recettes[i]);
            }  
        }
        
    }else{
        recettes = recipes;
        filtreTag();
        resultat = recettes;
    }
    if (resultat.length == 0){  //si il n'y a aucune correspondance, affiche un message

        pasDeRecette();

    }else{

        displayRecette(resultat);   //j'affiche le resultat de ce filtre au niveau des recettes
    }

    displayListe(resultat);     //j'affiche le resultat de ce filtre au niveau des listes btn
    
}


barreChamp.addEventListener("input", filtreBarre);




