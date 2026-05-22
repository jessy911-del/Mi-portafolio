let botonenviar = document.querySelector(".contacto .btn-hero");
let inputNombre = document.querySelector("input[type='text']");
let inputEmail = document.querySelector("input[type='email']");
let mensaje = document.getElementById("mensaje");

botonenviar.addEventListener("click", function() {
    let nombre = inputNombre.value;
    let email = inputEmail.value;

    if (nombre === "" || email === "") {
        mensaje.textContent = "⚠️ Por favor llena todos los campos.";
        mensaje.style.color = "#ef4444"; 
        return;
    }

    mensaje.textContent = "✅ ¡Gracias por contactarme, " + nombre + "! Pronto me pondré en contacto contigo." + email;
    mensaje.style.color = "#10b981"; 

});

let proyectos = [
    { nombre: "Portafolio Personal", tecnologia: "HTML & CSS" },
    { nombre: "App del clima", tecnologia: "JavaScript & API" },
    { nombre: "Lista de tareas", tecnologia: "JavaScript" },
    { nombre: "Tienda Online", tecnologia: "React" },
    { nombre: "Blog Personal", tecnologia: "Node.js" },
    { nombre: "Chat en tiempo real", tecnologia: "Socket.io" },

];

let grid = document.getElementById("grid-proyectos");

proyectos.forEach(function(proyecto) {
    let div = document.createElement("div");
    div.classList.add("proyecto");

    div.innerHTML = `
    <h3>${proyecto.nombre}</h3>
    <p>${proyecto.tecnologia}</p>
`;
    grid.appendChild(div);

});