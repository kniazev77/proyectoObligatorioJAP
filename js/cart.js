let cartBody = document.getElementById('cartBody');
let infoCartArray = [];

async function cartInfo () {
    let cartUrl = await fetch('https://japceibal.github.io/emercado-api/user_cart/25801.json');
    let infoCart = await cartUrl.json();
    infoCartArray = infoCart.articles;
    console.log(infoCartArray);

    cartStructure();
} cartInfo();

function cartStructure () {
    for (let product of infoCartArray) {
        cartBody.innerHTML += `
        <tr>
            <th scope="row" class=" col-3">
                <img class="rounded mx-auto d-block w-50" src="${product.image}">
            </th>
            <td class="text-center">${product.name}</td>
            <td class="text-center">${product.currency} ${product.unitCost}</td>
            <td class="text-center"> <input class="rounded" type="number" placeholder="Cant." style="width: 75px;" id="inp${product.id}" oninput="subTotalCalc(${product.id},${product.unitCost})"> </td>
            <td class="text-center"><b>${product.currency} <span id="totVal"></span></b></td>
        </tr>
        `
    }

}
cartStructure();


function subTotalCalc(id,costU) {
    const factor = document.getElementById('inp'+id).value;
    const precioUnit = parseInt(costU);

    const resultado = factor * precioUnit;
    document.getElementById('totVal').innerHTML= resultado;
};