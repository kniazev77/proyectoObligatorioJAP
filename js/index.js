function access(){
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");

    if (user.value.length > 0 && pass.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

let ingresar = document.getElementById("regBtn");

ingresar.addEventListener("click", () => {
    if (access()) {
        location.replace("home.html");
    } else {
        location.replace("index.html");
    }
    
} )