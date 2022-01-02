import hamburguerMenu from "../components/menuHamburguesa.js";

const D = document;

D.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".panel-btn", ".panel",".nav__menu--item a");
})


