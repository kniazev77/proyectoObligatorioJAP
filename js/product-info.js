let comentariosProducto = [];
let atributosProducto = [];
let currentProductsList = [];
let arrayImages = [];

let insertarInfo = document.getElementById('dataProd');
let imgCarousel = document.getElementById('imgCarousel');
let inComment = document.getElementById('inComment');
let usuarioActivo = document.getElementById('usuarioActivo');

let relatedProd = document.getElementById('relatedProd');


async function productInfo() {
    let prodId = localStorage.getItem("prodID");
    let productInfo = "https://japceibal.github.io/emercado-api/products/" + prodId + ".json" 
    let llamada = await fetch(productInfo);
    atributosProducto = await llamada.json();
    arrayImages = await atributosProducto.images

    let prodComment = "https://japceibal.github.io/emercado-api/products_comments/" + prodId + ".json"
    let llamada2 = await fetch(prodComment);
    comentariosProducto = await llamada2.json();
  //  console.log(comentariosProducto);

    //console.log(atributosProducto);
    showDatos();

} productInfo();

function showDatos() {

    imgCarousel.innerHTML+=`
    <div class="carousel-item active">
        <img src="${arrayImages[0]}" class="d-block w-100" alt="...">
    </div>`
    for (let pic = 1; pic < arrayImages.length; pic++) {
        let imagen = arrayImages[pic];

        imgCarousel.innerHTML+=`
                        <div class="carousel-item">
                            <img src="${imagen}" class="d-block w-100" alt="...">
                        </div>`
    }
    
    insertarInfo.innerHTML+=`
        <h5 class="card-title">${atributosProducto.name} - ${atributosProducto.currency} ${atributosProducto.cost}</h5>
        <p class="card-text">${atributosProducto.description}</p>
        <p class="card-text">Categoria: ${atributosProducto.category}</p>
        <p class="card-text"><small>${atributosProducto.soldCount} Unidades vendidas </small></p>`
        

    for (let comment of comentariosProducto) {

        let stars = undefined;
        stars = ``;
        for (let i=1; i <= 5; i++){
            if (i <= (Math.round(comment.score))) {
                 stars += `<span class="fa fa-star checked"></span>`;
            } else {
                 stars += `<span class="fa fa-star"></span>`;
            }
        }
        inComment.innerHTML+=`
            <a class="list-group-item list-group-item-action userscomments">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${comment.user}</h5>
                <small class="text-muted">${comment.dateTime}</small>
                </div>
                <p class="mb-1">${comment.description}</p>
                <small class="text-muted">Califiación: ${stars}</small>
            </a>`
    }

    usuarioActivo.innerHTML+=`
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value=${correoIngresado}>
    `

    for (producto of atributosProducto.relatedProducts) {
        if (producto.id != localStorage.getItem("prodID")) {
            relatedProd.innerHTML+= `
                <div class="col-md-3">
                        <div class="card mb-4 shadow-sm custom-card cursor-active"  style="width: 18rem;" onclick="setProdID(${producto.id})">
                        <img class="bd-placeholder-img card-img-top" src="${producto.image}">
                        <h4 class="m-3 text-center">${producto.name}</h3>
                        </div>
                    </div>`
        }
    }
}

function setProdID(id) {
    localStorage.setItem("prodID", id);
    location.replace("product-info.html")
}