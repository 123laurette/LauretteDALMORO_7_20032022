//cibler le champ de recherche
const barreChamp = document.getElementById("barre_champ");

//créer l'évènement pour écouter la frappe des lettres par l'utilisateur
barreChamp.addEventListener("keyup", barreDeRecherche);

//creation de la fonction qui va mettre en place l'écoute et le resultat de l'écoute

function barreDeRecherche(recettes){

//recuperer la valeur tapé
const inputBarre = barreChamp.value;
console.log (inputBarre);

//recupérer toutes les recettes
recettes = recipes;
    recettes.forEach(recette => {
        const creaFiltreRecette = new dataRecettes(recette);

    //comparer et filtrer le champ de recherche avec toutes les recettes
        creaFiltreRecette.name.forEach(name => {
            const resultat = name.toLowerCase().includes(inputBarre);
            console.log(resultat);
        })

    //afficher le résultat du filtre
    
    });

}







