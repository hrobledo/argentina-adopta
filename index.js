


/* form wizard*/

const form_1 = document.querySelector(".form_1");
const form_2 = document.querySelector(".form_2");
const form_3 = document.querySelector(".form_3");


const form_1_btns = document.querySelector(".form_1_btns");
const form_2_btns = document.querySelector(".form_2_btns");
const form_3_btns = document.querySelector(".form_3_btns");


const form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
const form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
const form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
const form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

const form_2_progessbar = document.querySelector(".form_2_progessbar");
const form_3_progessbar = document.querySelector(".form_3_progessbar");

const btn_done = document.querySelector(".btn_done");
const modal_wrapper = document.querySelector(".modal_wrapper");
const shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function () {
    form_1.style.display = "none";
    form_2.style.display = "block";

    form_1_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function () {
    form_1.style.display = "block";
    form_2.style.display = "none";

    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function () {
    form_2.style.display = "none";
    form_3.style.display = "block";

    form_3_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function () {
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_3_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_3_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function () {
    modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function () {
    modal_wrapper.classList.remove("active");
})



/* FORM CONTACTO VALIDACIONES */


import { validarApellido, validarEmail, validarNombre, validarTelefono } from "./adminUsuarios/usuarioValidators.js"

let nombreContacto = ""
let apellidoContacto = ""
let emailContacto = ""
let telefonoContacto = 0
let mensajeContacto = ""

let campoNombreContacto = document.getElementById("nombreContacto")
let campoApellidoContacto = document.getElementById("apellidoContacto")
let campoEmailContacto = document.getElementById("emailContacto")
let campoTelefonoContacto = document.getElementById("telefonoContacto")
let campoMensajeContacto = document.getElementById("notasContacto")
let formContacto = document.getElementById("formularioContacto")

//VALIDADORES 

export const validarMensaje = (valor, campo) => {
    if (valor.trim().length < 5) {
        campo.classList = "form-control is-invalid";
        return false;
    } else {
        campo.classList = "form-control is-valid"
        return true
    }
}


campoNombreContacto.addEventListener("blur", (e) => {
    if (validarNombre(e.target.value, campoNombreContacto)) {
        nombreContacto = e.target.value;
    }
})

campoApellidoContacto.addEventListener("blur", (e) => {
    if (validarApellido(e.target.value, campoApellidoContacto)) {
        apellidoContacto = e.target.value;
    }
})

campoEmailContacto.addEventListener("blur", (e) => {
    if (validarEmail(e.target.value, campoEmailContacto)) {
        emailContacto = e.target.value;
    }
})

campoTelefonoContacto.addEventListener("blur", (e) => {
    if (validarTelefono(e.target.value, campoTelefonoContacto)) {
        telefonoContacto = e.target.value;
    }
})

campoMensajeContacto.addEventListener("blur", (e) => {
    if (validarMensaje(e.target.value, campoMensajeContacto)) {
        mensajeContacto = e.target.value;
    }
})

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validarNombre(nombreContacto, campoNombreContacto) &&
        validarApellido(apellidoContacto, campoApellidoContacto) &&
        validarEmail(emailContacto, campoEmailContacto) &&
        validarTelefono(telefonoContacto, campoTelefonoContacto) &&
        validarMensaje(mensajeContacto, campoMensajeContacto)) {
        Swal.fire("Exito!", "Nos contactaremos a la brevedad!", "success");

        campoNombreContacto.value = "";
        campoApellidoContacto.value = "";
        campoEmailContacto.value = "";
        campoTelefonoContacto.value = "";
        campoMensajeContacto.value = "";


    } else {
        Swal.fire("Error!", "Verifique los campos", "error");
    }
    formContacto.reset();
    campoNombreContacto.classList += "form-control";
    campoApellidoContacto.classList += "form-control";
    campoEmailContacto.classList += "form-control";
    campoTelefonoContacto.classList += "form-control";
    campoMensajeContacto.classList += "form-control";

})


