const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

// const headerSec = document.getElementById('headerSecc');
let endsession = document.getElementById('endsession');
let dropdownTitle = document.getElementById('navbarDarkDropdownMenuLink');
let correoIngresado = localStorage.getItem("mail");

dropdownTitle.innerHTML +=`${correoIngresado}`

endsession.addEventListener('click', ()=> {
  localStorage.removeItem("mail")
});

/*
`
<li class="nav-item">
  <a class="nav-link active" href="my-profile.html">${correoIngresado}</a>
</li>`
*/


/*
`
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      ${correoIngresado}
    </a>
    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
      <li><a class="dropdown-item" href="my-profile.html">Mi Perfíl</a></li>
      <li><a class="dropdown-item" href="cart.html">Carrito</a></li>
      <li><a class="dropdown-item" href="index.html" id="endsession">Cerrar Sesión</a></li>
    </ul>
</li>`
*/