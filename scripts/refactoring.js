let tabIngredients = [];
let tabUstensiles = [];
let tabAppareils = [];

// ......LISTES INPUT PUSH ARRAY, SUPP DOUBLONS ET TRIE.....
function creaListeFiltre(recettes) {
    recettes.forEach(recette => {
        //Je fais mon tableau
        recette.ingredients.map((ingredient) => {
            tabIngredients.push(ingredient.ingredient);
        });
        recette.ustensils.map((ustensile) => {
            tabUstensiles.push(ustensile);
        });
        tabAppareils.push(recette.appliance);
    });

    //Je trie pour supp les doublons    
    tabIngredients = [...new Set (tabIngredients)].sort();
    tabUstensiles = [...new Set (tabUstensiles)].sort();
    tabAppareils = [...new Set (tabAppareils)].sort();
}

function creaListeDom(){
    //........je crée un UL et des LI pour chaque element.............
    const ingredientsDiv = document.getElementById("ingredients_div");
    const ustensilesDiv = document.getElementById("ustensiles_div");
    const appareilsDiv = document.getElementById("appareils_div");

    let ulListeFiltre = document.createElement("ul");
    const liListeFiltre = document.createElement("li");
    ulListeFiltre.appendChild(liListeFiltre);

    const ulIngredients = document.getElementsByTagName("ul");
    ulIngredients.id = "ingredients";
    const ulustensiles = document.getElementsByTagName("ul");
    ulustensiles.id = "ustensiles";
    const ulappareils = document.getElementsByTagName("ul");
    ulappareils.id = "appareils";



    tabIngredients.forEach(ingredient => {
        const liIngredients = document.getElementsByTagName("li");
        liIngredients.className = "li_ingredients";
        liIngredients.innerHTML = ingredient;
        liIngredients.value = ingredient;
        ulIngredients.appendChild(liIngredients);
    });
    ingredientsDiv.appendChild(ulIngredients);

    tabUstensiles.forEach(ustensile => {
        const liUstensile = document.getElementsByTagName("li");
        liUstensile.innerHTML = ustensile;
        liUstensile.value = ustensile;
        ulustensiles.appendChild(liUstensile);
    });
    ustensilesDiv.appendChild(ulustensiles);  

    tabAppareils.forEach(appareil => {
        const liAppareil = document.getElementsByTagName("li");
        liAppareil.innerHTML = appareil;
        liAppareil.value = appareil;
        ulappareils.appendChild(liAppareil);
    });
    appareilsDiv.appendChild(ulappareils);
}
