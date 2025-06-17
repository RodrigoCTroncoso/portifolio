document.addEventListener('DOMContentLoaded', function() {
    const linksDoMenu = document.querySelectorAll('nav a[href^="#"]');

    function aoClicarNoLink(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const secaoAlvo = document.querySelector(href);

        if (secaoAlvo) {
            secaoAlvo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    linksDoMenu.forEach(link => {
        link.addEventListener('click', aoClicarNoLink);
    });
});