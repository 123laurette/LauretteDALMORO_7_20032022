const barreChamp = document.getElementById("barre_champ");

barreChamp.addEventListener("keyup", barreDeRecherche);

function barreDeRecherche(recettes){
    const dataRecherche = new dataRecettes(recettes);
    const inputBarre = barreChamp.value;
    console.log(inputBarre);

    const resultat = [recettes.key].filter(recette => recette.dataRecherche.toLocaleLowerCase().includes(inputBarre.toLocaleLowerCase()));

    let suggestion = "";
    if(inputBarre != "") {
        resultat.forEach(element => {
            const divSuggestion = document.createElement("div");
            divSuggestion.className = "resultat_choix";
            divSuggestion.textContent = $(element.this.name);
        });
    }
        document.getElementById("listeSuggestions").innerHTML = suggestion;
}

