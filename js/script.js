document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('hamburger-button');
    const menu = document.querySelector('header nav .menu');

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('open');

        if (menuButton.textContent === '☰') {
            menuButton.textContent = '✖';
        } else {
            menuButton.textContent = '☰'; 
        }
    });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth' 
            });

            menu.classList.remove('open');
            menuButton.textContent = '☰';
        });
    });
});