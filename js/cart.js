let cartBody = document.getElementById('cartBody');
let infoCartArray = [];

let resultado = {};

let subTotCart = document.getElementById('subTotCart');
let shipCostCart = document.getElementById('shipCostCart');
let totalCart = document.getElementById('totalCart');

let ship1 = document.getElementById('flexRadioDefault1');
let ship2 = document.getElementById('flexRadioDefault2');
let ship3 = document.getElementById('flexRadioDefault3');



async function cartInfo() {
    let cartUrl = await fetch('https://japceibal.github.io/emercado-api/user_cart/25801.json');
    let infoCart = await cartUrl.json();
    infoCartArray = infoCart.articles;
    console.log(infoCartArray);

    cartStructure();
} cartInfo();

function cartStructure() {

    for (let product of infoCartArray) {
        cartBody.innerHTML += `
        <tr>
            <th scope="row" class=" col-3">
                <img class="rounded mx-auto d-block w-50" src="${product.image}">
            </th>
            <td class="text-center">${product.name}</td>
            <td class="text-center">${product.currency} ${product.unitCost}</td>
            <td class="text-center"> <input class="rounded" type="number" min="1" max="100" placeholder="Cant." style="width: 75px;" id="inp${product.id}" oninput="subTotalCalc(${product.id},${product.unitCost}), shipmmentOption()" required></td>
            <td class="text-center"><b>${product.currency} <span id="totVal"></span></b></td>
        </tr>
        `
    }

}
cartStructure();


function subTotalCalc(id, costU) {

    const factor = parseInt(document.getElementById('inp' + id).value);
    const precioUnit = parseInt(costU);

    resultado = factor * precioUnit;

    if (isNaN(resultado)) document.getElementById('totVal').innerText = "0";
    else document.getElementById('totVal').innerText = resultado;

    if (isNaN(resultado)) subTotCart.innerText = "0";
    else subTotCart.innerText = resultado;


};

const shipmmentOption = () => {
    const shipPercent = parseFloat(
        ship1.checked ? ship1.value :
            ship2.checked ? ship2.value :
                ship3.value);

    if (isNaN(resultado)) shipCostCart.innerText = "0";
    else shipCostCart.innerText = parseInt(resultado * shipPercent);

    if (isNaN(resultado)) totalCart.innerText = "0";
    else totalCart.innerText = resultado + (resultado * shipPercent)

};

ship1.addEventListener('click', () => { shipmmentOption() });
ship2.addEventListener('click', () => { shipmmentOption() });
ship3.addEventListener('click', () => { shipmmentOption() });

const modalVerify = () => {
    let creditCardCheck = document.getElementById('creditCardInput');
    let transferCheck = document.getElementById('bankTransferInput');


    if (creditCardCheck.checked) {
        document.getElementById('validationCustom04').disabled = true;
        document.getElementById('validationCustom01').disabled = false;
        document.getElementById('validationCustom02').disabled = false;
        document.getElementById('validationCustom03').disabled = false;


    } else if (transferCheck.checked) {
        document.getElementById('validationCustom01').disabled = true;
        document.getElementById('validationCustom02').disabled = true;
        document.getElementById('validationCustom03').disabled = true;
        document.getElementById('validationCustom04').disabled = false;

    }

}

const form = document.querySelector('form');
form.addEventListener("submit", (event) => {
    form.classList.add("was-validated");
    event.preventDefault();
})

