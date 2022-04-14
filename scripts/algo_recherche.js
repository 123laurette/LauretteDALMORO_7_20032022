/*//RECHERCHE AVEC BOUTON FILTRE
const liIngredients = document.querySelectorAll(".li_ingredients");
const tagLiIngredients = document.querySelector(".mot_cle");
let tagIng = [];


function tag(){
    liIngredients.forEach((ingredient) => {
    ingredient.addEventListener("click", (e) => {
        
        tagIng.push(e.target.textContent);
        tagLiIngredients.appendChild(tagIng);
        tabIngredients.delete(ingredient.textContent);
    })
})
}

tag();
*/





//RECHERCHE AVEC BARRE PRINCIPALE
//cibler le champ de recherche
/*const barreChamp = document.getElementById("barre_champ");

//créer l'évènement pour écouter la frappe des lettres par l'utilisateur
barreChamp.addEventListener("input", filtreDeRecherche);

//creation de la fonction qui va mettre en place l'écoute et le resultat de l'écoute

const recettes = recipes
let resultat = [];

function filtreDeRecherche(recettes){
//recuperer la valeur tapé
const inputBarre = barreChamp.value.toLowerCase();
console.log (inputBarre);
    [recettes].forEach(recette => {

const creaFiltreRecette = new dataRecettes(recette);

    //comparer et filtrer le champ de recherche avec toutes les recettes
        resultat = [creaFiltreRecette.name].filter(recette => 
            recette.toLowerCase().includes(inputBarre)
        );
        creaCarteDom(resultat);
});
}*/