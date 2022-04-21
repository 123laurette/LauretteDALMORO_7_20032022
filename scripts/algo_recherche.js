
//              RECHERCHE AVEC BARRE PRINCIPALE
//creation de la fonction qui va mettre en place l'écoute et le resultat de l'écoute
const barreChamp = document.getElementById("barre_champ");

let recettes = recipes;
let resultat = [];

barreChamp.addEventListener("input", function (recette){
    const inputBarre = barreChamp.value;
    if (inputBarre.length >= 3){
        resultat = recettes.filter(recette => recette.name.toLowerCase().includes(inputBarre.toLowerCase()) || recette.description.toLowerCase().includes(inputBarre.toLowerCase()));
    }
    recette = resultat;
    displayRecette(recette);
    
})  




//              RECHERCHE AVEC BOUTON FILTRE

const inputIngredients = document.getElementById("input_ingredients");
let suggestionIng = "";


inputIngredients.addEventListener("input", function(){
    const inputBarreIng = inputIngredients.value;

    //Je filtre en fonction des 3 caractères saisis
    if(inputBarreIng.length >= 3) {
        const resultFiltreIng = tabIngredients.filter(el => el.toLowerCase().includes(inputBarreIng.toLowerCase()));
        console.log(resultFiltreIng);
        
        //Je parcour le tableau de resultat et j'affiche les suggestions
        resultFiltreIng.forEach(el =>
            suggestionIng += `
            <li class="li_ingredients">${el}</li>`
        )
        document.getElementById("ingredients").innerHTML = suggestionIng;
    }else{}
})

const inputAppareils = document.getElementById("input_appareils");
let suggestionApp = "";


inputAppareils.addEventListener("input", function(){
    const inputBarreApp = inputAppareils.value;

    if(inputBarreApp.length >= 3) {
        const resultFiltreApp = tabAppareils.filter(el => el.toLowerCase().includes(inputBarreApp.toLowerCase()));
        console.log(resultFiltreApp);


        resultFiltreApp.forEach(el =>
            suggestionApp += `
            <li class="li_appareils">${el}</li>`
        )
        document.getElementById("appareils").innerHTML = suggestionApp;
    }else{}
})

const inputUstensiles = document.getElementById("input_ustensiles");
let suggestionust = "";


inputUstensiles.addEventListener("input", function(){
    const inputBarreUst = inputUstensiles.value;

    if(inputBarreUst.length >= 3) {
        const resultFiltreUst = tabUstensiles.filter(el => el.toLowerCase().includes(inputBarreUst.toLowerCase()));
        console.log(resultFiltreUst);


        resultFiltreUst.forEach(el =>
            suggestionust += `
            <li class="li_ustensiles">${el}</li>`
        )
        document.getElementById("ustensiles").innerHTML = suggestionust;
    }else{}
})



//          ***********A FAIRE****************
//  FONCTION AFFICHER L'ELEMENT SELECTIONNE DANS LES TAGS
//  FAIRE UN RESET DES ECOUTEURS, DES CHAMPS DE SAISIS ET DE L'HISTORIQUE
//  FAIRE NE SORTE QUE LES ACCENTS NE BLOQUENT RIEN
//  QUAND JE TAPE PLUS DE 3 CARACTERES LA CONSOLE ME RETOURNE PLUSIEURS FOIS LES MEMES SUGGESTIONS







/*let liIngredient = document .querySelectorAll(".li_ingredients");

liIngredient.addEventListener("click", (el) =>{
    const tagLiIngredient = `<li class="suggestion">${el}</li>`
    document.getElementsById("champ_mot_cle").innerHTML = tagLiIngredient;

})*/











