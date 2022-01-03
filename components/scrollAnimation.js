const IMAGEN1 = document.querySelector('.content__image');
const CONTAINER_TEXT = document.querySelector('.container__text');
// const CONTAINER_SACRIFICATE = document.querySelector('.container__certificate');
// const CONTAINER_SKILLS = document.querySelector('.container__skills');

let cargarImagen = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}

let observador = new IntersectionObserver(cargarImagen,
    {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 1.0
    });

observador.observe(IMAGEN1);
observador.observe(CONTAINER_TEXT);
// observador.observe(CONTAINER_CERTIFICATE);
// observador.observe(CONTAINER_SKILLS);