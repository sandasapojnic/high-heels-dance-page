document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("hamburger-button");
  const menu = document.querySelector("header nav .menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  window.addEventListener("load", () => {
    const quote = document.querySelector(".quote");
    setTimeout(() => {
        quote.classList.add("visible");

        setTimeout(() => {
            quote.classList.remove("visible");
            quote.classList.add("hidden");
        }, 4000);
    }, 1000);
});

  const menuLinks = document.querySelectorAll('a[href^="#"]');

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const headerHeight = document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: "smooth",
      });

      menu.classList.remove("open");
      menuButton.textContent = "☰";
    });
  });

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      501: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const scrollTopBtn = document.getElementById("scroll-top-btn");

  function checkScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      scrollTopBtn.style.backgroundColor = "#aaa";
    } else {
      scrollTopBtn.style.backgroundColor = "#aaa";
    }
  }

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  };

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollTopBtn.classList.add("active");
    setTimeout(function () {
      scrollTopBtn.classList.remove("active");
      scrollTopBtn.style.backgroundColor = "#aaa";
    }, 500);
  });

  // Când cursorul trece pe buton
  scrollTopBtn.addEventListener("mouseover", function () {
    if (!scrollTopBtn.classList.contains("active")) {
      scrollTopBtn.style.backgroundColor = "#c40004";
    }
  });

  scrollTopBtn.addEventListener("mouseout", function () {
    if (!scrollTopBtn.classList.contains("active")) {
      scrollTopBtn.style.backgroundColor = "#aaa";
    }
  });

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
});
