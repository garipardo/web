const fondo = document.querySelector(".fondo");
const loginlink =document.querySelector(".login-link");
const registrarlink = document.querySelector(".registrar-link");
const btn =document.querySelector(".btn");
const iconocerrar = document.querySelector(".icono-cerrar");


registrarlink.addEventListener("click", () => {
    fondo.classlist.add('active');
});
loginlink.addEventListener("click", () => {
    fondo.classlist.remove('active');
});
btn.addEventListener("click", () => {
    fondo.classList.add('active-btn');
});
iconocerrar.addEventListener("click", () => {
    fondo.classList.remove('active-btn');
});