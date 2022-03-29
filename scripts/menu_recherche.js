const inputIngredients = document.querySelector(".ingredients");

function crealistIngredientsDom(ingredients){
    const ulIngredient = document.createElement("ul");
    const liIngredient = document.createElement("li");
    ulIngredient.appendChild(liIngredient);

    ingredients.forEach(ingredient => {
        let tabIngredients = [];
        tabIngredients.push(ingredient);
        console.log(tabIngredients);
        liIngredient.textContent = ingredient.ingredient;
        inputIngredients.appendChild(ulIngredient);
});
}



function displayliste(){
    const recette = recipes;
    console.log(recette);
    crealistIngredientsDom(recette);
}
displayliste();