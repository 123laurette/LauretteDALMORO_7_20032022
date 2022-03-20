// RECUPERATION DE LA BASE DE DONNEES
async function getDonnees () {
    const response = await fetch ("data/recipes.json");
    const data = await response.json();
    console.log(data)
    return data;
}
getDonnees()

