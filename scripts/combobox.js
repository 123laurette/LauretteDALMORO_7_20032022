function creaDataList(){
    let values = ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa"];
    let dataList = document.createElement("datalist");
    dataList.id = "country_list";

    values.forEach(value => {
        let option = document.createElement("option");
        option.innerHTML = value;
        option.value = value;
        dataList.appendChild(option);
    });
    document.body.appendChild(dataList);
}
creaDataList();
/*const container = document.querySelector(".container");
function creaDataList(){
    const data = new dataRecherche(ingredients);
const newTabIngredients = data.creaIngredientsDom();


           
            dataList.appendChild(option);
        });
        container.appendChild(dataList);
    }
    creaDataList();*/
