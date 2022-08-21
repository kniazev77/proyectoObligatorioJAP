function access(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user > 0 & pass > 0) {
        return true;
    } else {
        return false;
    }
}

let ingresar = document.getElementById("regBtn");

ingresar.addEventListener("click", () => {
    if (access()) {
        location.replace("main.html");
    } else {
        location.replace("index.html");
    }
    
} )
