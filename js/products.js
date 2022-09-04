// CREO FUNCION async PARA TRAER LOS DATOS DEL FETCH Y LE INDICO QUE SE TRATA DE UN JSON PARA QUE PUEDA INTERPRETARLO

let currentProductsList = [];
let insertarListado = document.getElementById('cat-list-container');

let currentSortCriteria = undefined;
let minCost = undefined;
let maxCost = undefined;

const ORDER_ASC_BY_PRICE = "Menor Precio";
const ORDER_DESC_BY_PRICE = "Mayor Precio";
const ORDER_BY_PROD_COUNT = "Cont.";

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

async function traerDatos() {
    let catSelector = localStorage.getItem("catID");
    let linkProductos = "https://japceibal.github.io/emercado-api/cats_products/"+ catSelector + ".json" 
    let llamada = await fetch(linkProductos);
    let llamadaInter = await llamada.json();
    currentProductsList = llamadaInter.products;
//   console.log(currentProductsList)
   showDatos();

} traerDatos();

function showDatos() {
    insertarListado.innerHTML = ""
    for (let elemento of currentProductsList) {
        if (((minCost === undefined) || (minCost != undefined && parseInt(elemento.cost) >= minCost)) &&
            ((maxCost === undefined) || (maxCost != undefined && parseInt(elemento.cost) <= maxCost))){
   
                insertarListado.innerHTML += `
                <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${elemento.image}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${elemento.name} - ${elemento.currency} ${elemento.cost}</h4>
                            <small class="text-muted">${elemento.soldCount} Vendidos</small>
                        </div>
                        <p class="mb-1">${elemento.description}</p>
                    </div>
                </div>
            </div>
                `
        }
    }
} showDatos();

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsList = productsArray;
    }

    currentProductsList = sortProducts(currentSortCriteria, currentProductsList);

    //Muestro los productos ordenados
    showDatos();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PRICE);
        console.log(currentProductsList);
    });
    
    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_PRICE);
        console.log(currentProductsList);
    });
    
    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT);
        console.log(currentProductsList);
    
    });
    
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterPriceMin").value = "";
        document.getElementById("rangeFilterPriceMax").value = "";
    
        minCount = undefined;
        maxCount = undefined;
    
        showDatos();
    });
    
    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCost = document.getElementById("rangeFilterPriceMin").value;
        maxCost = document.getElementById("rangeFilterPriceMax").value;
    
        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }
    
        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }
    
        showDatos();
    });
})
