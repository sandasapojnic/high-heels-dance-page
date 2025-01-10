document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('hamburger-button');
    const menu = document.querySelector('header nav .menu');

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('open');

        if (menuButton.textContent === '☰') {
            menuButton.textContent = '✖️';
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

    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        const offset = -currentIndex * (items[0].offsetWidth + 20);
        carousel.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        updateCarousel();
    });
   
    nextButton.addEventListener('click', function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateCarousel();
    });

    setInterval(function () {
        nextButton.click();
    }, 5000);

    const videos = document.querySelectorAll('.gallery-media');

    videos.forEach(video => {
        video.addEventListener('mouseover', function () {
            try {
                if (video.paused) {
                    video.play();
                }
            } catch (error) {
                console.error('Eroare la redarea video-ului: ', error);
            }
        });

        video.addEventListener('mouseleave', function () {
            try {
                if (!video.paused) {
                    video.pause();
                    video.currentTime = 0;
                }
            } catch (error) {
                console.error('Eroare la pauză video-ului: ', error);
            }
        });
    });
});