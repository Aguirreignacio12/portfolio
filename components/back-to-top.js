window.addEventListener('scroll', e => {
    var el = document.getElementById('jsScroll');
    if (window.scrollY > 200) {
        el.classList.add('visibleScroll');
    } else {
        el.classList.remove('visibleScroll');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Language: javascript