const HEADER = document.getElementById('top-header');
const BACK_TO_TOP = document.getElementById('back-to-top');

BACK_TO_TOP.addEventListener('click', () => {
    window.scrollTo(0, 0);
    HEADER.focus();
});




// Language: javascript