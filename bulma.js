
document.addEventListener('DOMContentLoaded', () => {
    // Hämta alla element med 'navbar-burger' klassen
    const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Kontrollera om det finns några
    if (burgers.length > 0) {
        burgers.forEach(el => {
            el.addEventListener('click', () => {
                // Växla på navbar-menyn
                const target = document.getElementById(el.dataset.target);
                el.classList.toggle('is-active');
                target.classList.toggle('is-active');
            });
        });
    }
});
