//RECHERCHE AVEC BARRE PRINCIPALE
//creation de la fonction qui va mettre en place l'écoute et le resultat de l'écoute

let recette = recipes;
tabNameDesc = [];

//JE TRIE MES RECETTES PAR LE NOM ET PAR LA DESCRIPTION
function recherche(recettes) {
    recettes.forEach(recette => {
        //Je fais mon tableau
        tabNameDesc.push(recette.name, recette.description);
    });
    //Je trie pour supp les doublons    
    tabNameDesc = [...new Set (tabNameDesc)];
}

let resultNameDesc = "";
let resultIng = "";
let resultat = [];

//cibler le champ de recherche
const barreChamp = document.getElementById("barre_champ");


//créer l'évènement pour écouter la frappe des lettres par l'utilisateur
//et mise en place du filtre

barreChamp.addEventListener("input", function(){
    recherche(recette); // j'appel ma fonction de tri nom et description
    const inputBarre = barreChamp.value;    //je cible les caractères saisis

    if (inputBarre.length >= 3) {   //je filtre en fonction des 3 caractères

        resultNameDesc = tabNameDesc.filter(el => el.toLowerCase().includes(inputBarre.toLowerCase()));
        resultIng = tabIngredients.filter(el => el.toLowerCase().includes(inputBarre.toLowerCase()));

        resultat.push(resultNameDesc, resultIng)    //je mets dans un même tableau toutes les suggestions
        
        console.log(resultNameDesc);
        console.log(resultIng);
        console.log(resultat);

    }else;
})


//RECHERCHE AVEC BOUTON FILTRE

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
    }
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
    }
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
    }
})



//          A FAIRE
//  AFFICHER LE RESULTAT DU TRIE DE LA BARRE
//  FONCTION AFFICHER L'ELEMENT SELECTIONNE DANS LES TAGS
//  FAIRE UN RESET DES ECOUTEURS, DES CHAMPS DE SAISIS ET DE L'HISTORIQUE
//  FAIRE NE SORTE QUE LES ACCENTS NE BLOQUENT RIEN




/*let liIngredient = document .querySelectorAll(".li_ingredients");

liIngredient.addEventListener("click", (el) =>{
    const tagLiIngredient = `<li class="suggestion">${el}</li>`
    document.getElementsByClassName("champ_mot_cle").innerHTML = tagLiIngredient;

})*/











