const listadoAutos = fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
    .then(res => res.json())
    .then(data => console.log(data))

    const prod = data.products
    const codigo_a_insertar = ""
for prod in data.products {codigo_a_insertar += '<div>'}

document.getElementById('spinner-wrapper').innerHTML = codigo_a_insertar