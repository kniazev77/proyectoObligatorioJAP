// Declaración de las variables

const form = document.querySelector('form');

const firstName = document.getElementById('validationServer01');
const secondName = document.getElementById('validationServer02');
const firstLastname = document.getElementById('validationServer03');
const secondLastname = document.getElementById('validationServer04');
const phoneNumber = document.getElementById('validationServer05');
const profileEmail = document.getElementById('validationServerUsername');

const profileImg = document.getElementById('profile-img');
const addImg = document.getElementById('addImg');


const saveChanges = document.getElementById("saveChanges");

// Evento que ejecuta los las validaciones y devuelve los feedbacks correspondientes al enviarse el formulario

form.addEventListener("submit", (event) => {
    form.classList.add("was-validated");
    event.preventDefault();
    formValidation();
})

// Función para validar los campos obligatorios del formulario. Valida y de ser correctos los almacena en localStorage

const formValidation = () => {
    if (firstName.checkValidity() && firstLastname.checkValidity()) {
        localStorage.setItem('firstName', firstName.value)
        localStorage.setItem('firstLastname', firstLastname.value)
        localStorage.setItem('secondName', secondName.value);
        localStorage.setItem('secondLastname', secondLastname.value);
        localStorage.setItem('phoneNumber', phoneNumber.value);
    }
}

// Función para que al enviar el formulario con los datos estos sean el value establecido del campo correspondiente.
// En caso que no haya cambios o el envío del formulario no sea válido no ocurriran cambios

const actualInfo = () => {
    profileEmail.value = correoIngresado
    firstName.value = localStorage.getItem('firstName')
    firstLastname.value = localStorage.getItem('firstLastname')
    secondName.value = localStorage.getItem('secondName')
    secondLastname.value = localStorage.getItem('secondLastname')
    phoneNumber.value = localStorage.getItem('phoneNumber')
}; actualInfo()
