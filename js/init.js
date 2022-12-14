const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

// MANIPULACION PARA EL DESLOGUEO Y PARA QUE TOME EL NOMBRE DE USUARIO COMO TEXTO DEL DROPDOWN BUTTON

let endsession = document.getElementById('endsession');
let dropdownTitle = document.getElementById('navbarDarkDropdownMenuLink');
let correoIngresado = localStorage.getItem("mail");
let btnProfile = document.getElementById('btnProfile');

dropdownTitle.innerHTML += `${correoIngresado}`


// Evento modificado: ahora remueve todos los items del localStorage al cerrar sesión.

endsession.addEventListener('click', () => {
  localStorage.clear();
});

// Evento que verifica si el usuario está logueado para darle acceso al perfil

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('mail') === null) {
    btnProfile.classList.add("d-none")
  }
})