function access(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user > 0 & pass > 0) {
        return true;
    } else {
        return false;
    }
}

access();

let ingresar = document.getElementById("regBtn");

ingresar.addEventListener("click", () => {
    if (access()) {
        location.replace("index.html");
    } else {
        location.replace("login.html");
    }
    
} )