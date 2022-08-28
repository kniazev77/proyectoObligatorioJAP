let headerSec = document.getElementById('userSet');

document.addEventListener("DOMContentLoaded", function(){

    let correoIngresado = localStorage.getItem("mail"); // CONSIGNA 1 ENTREGA 2
    headerSec.innerHTML += `
    <a class="nav-link active" href="my-profile.html">${correoIngresado}</a>    
    `
    console.log(correoIngresado)

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});