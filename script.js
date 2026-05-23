// ── Seleccionar elementos ──────────────────────────────
let botonEnviar = document.querySelector(".contacto .btn-hero");
let botonTema = document.querySelector(".btn-tema");
let botonProyectos = document.querySelector(".btn-hero");
let inputNombre = document.querySelector("input[type='text']");
let inputEmail = document.querySelector("input[type='email']");
let mensaje = document.getElementById("mensaje");
let body = document.querySelector("body");

// ── Tema oscuro/claro con localStorage ────────────────
let temaOscuro = localStorage.getItem("tema") !== "claro";

botonTema.addEventListener("click", function() {
    if (temaOscuro) {
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#0F172A";
        temaOscuro = false;
        localStorage.setItem("tema", "claro");
    } else {
        body.style.backgroundColor = "#0F172A";
        body.style.color = "white";
        temaOscuro = true;
        localStorage.setItem("tema", "oscuro");
    }
});

// ── Formulario de contacto ─────────────────────────────
botonEnviar.addEventListener("click", function() {
    let nombre = inputNombre.value;
    let email = inputEmail.value;

    if (nombre === "" || email === "") {
        mensaje.textContent = "⚠️ Por favor llena todos los campos.";
        mensaje.style.color = "#ef4444";
        return;
    }

    mensaje.textContent = "✅ ¡Gracias, " + nombre + "! Pronto me pondré en contacto contigo.";
    mensaje.style.color = "#10b981";
});

// ── Proyectos dinámicos ────────────────────────────────
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

    div.addEventListener("mouseover", function() {
        div.style.transform = "translateY(-8px)";
        div.style.transition = "transform 0.3s";
        div.style.boxShadow = "0 10px 30px rgba(99, 102, 241, 0.3)";
    });

    div.addEventListener("mouseout", function() {
        div.style.transform = "translateY(0)";
        div.style.boxShadow = "none";
    });

    grid.appendChild(div);
});


fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(response => response.json())
    .then(data => { 
            let contenedor = document.getElementById("usuario-api");
            contenedor.innerHTML = `
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Telefono:</strong> ${data.phone}</p>
                <p><strong>Ciudad:</strong> ${data.address.city}</p>

            `;
    });


