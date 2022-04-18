/*//RECHERCHE AVEC BOUTON FILTRE

//verif que mon tableau d'ingredients est bien présent
console.log(tabIngredients);
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

tag();*/




//RECHERCHE AVEC BARRE PRINCIPALE


//cibler le champ de recherche
const barreChamp = document.getElementById("barre_champ");

//créer l'évènement pour écouter la frappe des lettres par l'utilisateur
barreChamp.addEventListener("input", filtreDeRecherche);

//creation de la fonction qui va mettre en place l'écoute et le resultat de l'écoute

const recette = recipes;
tabName = [];

//JE TRIE MES RECETTES PAR LE NOM
function recherche(recettes) {
    recettes.forEach(recette => {
        //Je fais mon tableau
        tabName.push(recette.name);
    });
    //Je trie pour supp les doublons    
    tabName = [...new Set (tabName)].sort();
    console.log(tabName);
}
recherche(recette);



function filtreDeRecherche() {
     //recuperer la valeur tapé
    inputBarre = barreChamp.value;
    
    if (inputBarre.length >= 3) {
        const resultat = tabName.includes(inputBarre.value);
        console.log(resultat);
        
    }
}
filtreDeRecherche();













/*function filtreDeRecherche(recettes) {
     //recuperer la valeur tapé
    const inputBarre = barreChamp.value;
    
    if (inputBarre.length >= 3) {
        const resultat = recettes.filter(recette => recette.name.toLowerCase().includes(inputBarre.toLowerCase()));
        console.log
        
    }
}*/