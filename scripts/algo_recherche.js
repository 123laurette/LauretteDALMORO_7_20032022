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

tag();






//RECHERCHE AVEC BARRE PRINCIPALE


//cibler le champ de recherche
const barreChamp = document.getElementById("barre_champ");

//créer l'évènement pour écouter la frappe des lettres par l'utilisateur
barreChamp.addEventListener("input", filtreDeRecherche);

//creation de la fonction qui va mettre en place l'écoute et le resultat de l'écoute

const recettes = recipes
let resultat = [];

function filtreDeRecherche(recettes){
    //recuperer la valeur tapé
    const inputBarre = barreChamp.value.toLowerCase();
    console.log (inputBarre);

    recettes.forEach(recette => {
        const creaFiltreRecette = new dataRecettes(recette);

    //comparer et filtrer le champ de recherche avec toutes les recettes
        resultat = [creaFiltreRecette.name].filter(recette => 
            recette.toLowerCase().includes(inputBarre)
        );
        creaCarteDom(resultat);
    });
}*/