const listadoAutos = fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
    .then(res => res.json())
    .then(data => console.log(data))


var codigo_a_insertar = ""
for (let i in listadoAutos.data) {
    codigo_a_insertar += "products[0] + products[1] + products[2] + products[3] + products[4]"
    
    console.log(codigo_a_insertar)
}

const div_modif = document.getElementsByTagName('lds-ring');
div_modif.innerHTML += codigo_a_insertar

console.log(div_modif)

/* 
const listadoAutosSTR= JSON.stringify(listadoAutos);
console.log(listadoAutosSTR);


const car_list = listadoAutosSTR.products
console.log(car_list)
*/