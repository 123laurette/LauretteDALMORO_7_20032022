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











/*let liIngredient = document .querySelectorAll(".li_ingredients");

liIngredient.addEventListener("click", (el) =>{
    const tagLiIngredient = `<li class="suggestion">${el}</li>`
    document.getElementsById("champ_mot_cle").innerHTML = tagLiIngredient;

})*/











