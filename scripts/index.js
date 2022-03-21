
// RECUPERATION DE LA BASE DE DONNEES
async function getDonnees () {
    const response = await fetch ("data/recipes.json");
    const data = await response.json();
    console.log(data)
    return data;
}

const cartesRecettes = document.querySelector(".cartes_recettes");
console.log(cartesRecettes);

function displayRecette (recettes) {
    recettes.forEach(recette => {
        const creaData = new dataRecettes(recette);
        console.log(creaData)
        const creaCarte = creaData.creaCarte(this.id);
        console.log(creaCarte);
        cartesRecettes.appendChild(creaCarte);
    });

}

async function display () {
    const recettes = await getDonnees();
    displayRecette(recettes.recette);
}

display ();