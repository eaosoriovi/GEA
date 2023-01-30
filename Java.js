const nav = document.querySelector("#nav-menu");
const open = document.querySelector("#open__menu");
const cerrar = document.querySelector("#close__menu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})