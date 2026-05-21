let botonProyectos = document.querySelector(".btn-hero");
let botonTema = document.querySelector(".btn-tema");
let body = document.querySelector("body");

let temaOscuro = true;

botonProyectos.addEventListener("click", function() {
    alert("¡Aquí irán mis proyectos!");
});

botonTema.addEventListener("click", function() {
    if (temaOscuro) {
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#0F172A";
        temaOscuro = false;
    } else {
        body.style.backgroundColor = "#0F172A";
        body.style.color = "white";
        temaOscuro = true;
    }
});