let comentariosProducto = [];
let atributosProducto = [];
let insertarInfo = document.getElementById('infoProducto');
let usuarioActivo = localStorage.getItem('mail');

async function productInfo() {
    let prodId = localStorage.getItem("prodID");
    let productInfo = "https://japceibal.github.io/emercado-api/products/" + prodId + ".json" 
    let llamada = await fetch(productInfo);
    atributosProducto = await llamada.json();

    let prodComment = "https://japceibal.github.io/emercado-api/products_comments/" + prodId + ".json"
    let llamada2 = await fetch(prodComment);
    comentariosProducto = await llamada2.json();
    console.log(comentariosProducto);


    //console.log(atributosProducto);
    showDatos();

} productInfo();

function showDatos() {
    insertarInfo.innerHTML=`
    <div class="card cardestilo">
    <div class="row g-0">
     <div class="col-md-4">
          <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="${atributosProducto.images[0]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="${atributosProducto.images[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="${atributosProducto.images[2]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="${atributosProducto.images[3]}" class="d-block w-100" alt="...">
              </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
              </button>
          </div>
     </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${atributosProducto.name} - ${atributosProducto.currency} ${atributosProducto.cost}</h5>
          <p class="card-text">${atributosProducto.description}</p>
          <p class="card-text">Categoria: ${atributosProducto.category}</p>
          <p class="card-text"><small>${atributosProducto.soldCount} Unidades vendidas </small></p>
        </div>
      </div>
    </div>
  </div>`
  
    insertarInfo.innerHTML+= `
    <div>
    <h4 class="commentstitle">Comentarios y Calificaciones</h4>
    </div>`

    for (let comment of comentariosProducto) {
        insertarInfo.innerHTML+=`
        <div class="list-group"></div>
            <a class="list-group-item list-group-item-action userscomments">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${comment.user}</h5>
                <small class="text-muted">${comment.dateTime}</small>
                </div>
                <p class="mb-1">${comment.description}</p>
                <small class="text-muted">Puntuación: ${comment.score} / 5</small>
            </a>
        </div>`        
    }

    insertarInfo.innerHTML+=`
    <div>
        <h4 class="commentstitle"> Opina sobre el producto </h4>
    </div>
        <form>
            <div class="mb-3">
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Ususario</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="${usuarioActivo}">
                        </div>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Cuentanos sobre el producto:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <select class="form-select" aria-label="Default select example">
                    <option selected>Calificación</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit" class="btn btn-primary mb-3 enviarcomment">Enviar</button>
            </div>
        </form>`


}


