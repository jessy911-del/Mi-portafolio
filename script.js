let botonenviar = document.querySelector(".contacto .btn-hero");
let inputNombre = document.querySelector("input[type='text']");
let inputEmail = document.querySelector("input[type='email']");
let mensaje = document.getElementById("mensaje");

botonenviar.addEventListener("click", function() {
    let nombre = inputNombre.value;
    let email = inputEmail.value;

    if (nombre === "" || email === "") {
        mensaje.textContent = "⚠️ Por favor llena todos los campos.";
        mensaje.style.color = "ef4444";
        return;
    }

    mensaje.textContent = "✅ ¡Gracias por contactarme, " + nombre + "! Pronto me pondré en contacto contigo." + email;
    mensaje.style.color = "10b981";

});