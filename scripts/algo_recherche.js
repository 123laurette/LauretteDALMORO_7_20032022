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
    recherche(recette);
    const inputBarre = barreChamp.value;

    if (inputBarre.length >= 3) {

        resultNameDesc = tabNameDesc.filter(el => el.toLowerCase().includes(inputBarre.toLowerCase()));
        resultIng = tabIngredients.filter(el => el.toLowerCase().includes(inputBarre.toLowerCase()));

        resultat.push(resultNameDesc, resultIng)
        
        console.log(resultNameDesc);
        console.log(resultIng);
        console.log(resultat);

    }else{};
})


//RECHERCHE AVEC BOUTON FILTRE



const inputIngredients = document.getElementById("input_ingredients");
inputIngredients.addEventListener("input", function(){
    const inputBarreIng = inputIngredients.value;

    if(inputBarreIng.length >= 3) {
        const resultFiltreIng = tabIngredients.filter(el => el.toLowerCase().includes(inputBarreIng.toLowerCase()));
        console.log(resultFiltreIng);
        
        let suggestionIng = "";

        resultFiltreIng.forEach(el =>
            suggestionIng += `
            <li class="suggestion">${el}</li>`
        )
        document.getElementById("ingredients").innerHTML = suggestionIng;
    }
})

const inputAppareils = document.getElementById("input_appareils");
inputAppareils.addEventListener("input", function(){
    const inputBarreApp = inputAppareils.value;

    if(inputBarreApp.length >= 3) {
        const resultFiltreApp = tabAppareils.filter(el => el.toLowerCase().includes(inputBarreApp.toLowerCase()));
        console.log(resultFiltreApp);

        let suggestionApp = "";

        resultFiltreApp.forEach(el =>
            suggestionApp += `
            <li class="suggestion">${el}</li>`
        )
        document.getElementById("appareils").innerHTML = suggestionApp;
    }
})


const inputUstensiles = document.getElementById("input_ustensiles");
inputUstensiles.addEventListener("input", function(){
    const inputBarreUst = inputUstensiles.value;

    if(inputBarreUst.length >= 3) {
        const resultFiltreUst = tabUstensiles.filter(el => el.toLowerCase().includes(inputBarreUst.toLowerCase()));
        console.log(resultFiltreUst);

        let suggestionust = "";

        resultFiltreUst.forEach(el =>
            suggestionust += `
            <li class="suggestion">${el}</li>`
        )
        document.getElementById("ustensiles").innerHTML = suggestionust;
    }
})








//je cible le ul des mots clés
const champMotCle = document.querySelector(".champ_mot_cle");

//fonction qui cible chaque ingredient dans le tableau des ingredients
//au click sur l'ingredient, je crée un li et j'y insère le texte de l'ingredient cliqué
//je supprime cet ingredient du tableau des ingrédients
function tag(){
    tabIngredients.forEach((ingredient) => {
        ingredient.addEventListener("click", (e) => {
            const tagLiIngredient = document.createElement("li");
            tagLiIngredient.innerHTML = e.target.textContent;
            champMotCle.appendChild(tagLiIngredient);
            tabIngredients.delete(e.textContent);
        })
    })
}

tag();












/*function filtreDeRecherche(recettes) {
     //recuperer la valeur tapé
    const inputBarre = barreChamp.value;
    
    if (inputBarre.length >= 3) {
        const resultat = recettes.filter(recette => recette.name.toLowerCase().includes(inputBarre.toLowerCase()));
        console.log
        
    }
}*/


