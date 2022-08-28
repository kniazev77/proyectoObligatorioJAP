// CREO FUNCION async PARA TRAER LOS DATOS DEL FETCH Y LE INDICO QUE SE TRATA DE UN JSON PARA QUE PUEDA INTERPRETARLO

async function traerDatos() {
    let catSelector = localStorage.getItem("catID");
    let linkProductos = "https://japceibal.github.io/emercado-api/cats_products/"+ catSelector + ".json" 
    let llamada = await fetch(linkProductos);
    let llamadaInter = await llamada.json();
 
// LLAMO AL <div> DEL HTML CORRESPONDIENTE PARA MANEJAR LA SECCION DONDE QUIERO INSERTAR EL LISTADO DE PRODUCTOS 

    let insertarListado = document.getElementById('cat-list-container')

// USO UN for PARA RECORRER LOS ELEMENTOS DEL LISTADO JSON QUE TRAJE, OBTENER LOS ATRIBUTOS QUE QUIERO E INSERTARLOS EN LA SECCION
for (let elemento of llamadaInter.products) {
   
// TODA LA ESTRUCTURA QUE VA A ADOPTAR CADA PRODUCTO DE LA PAGINA SE DECLARA LUEGO DEL InnerHTML EN FORMATO HTML ENTRE COMILLAS `` 
// POR CADA PRODUCTO QUE LEA EL JS VA A INSERTAR UNA NUEVA ESTRUCTURA

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
traerDatos();