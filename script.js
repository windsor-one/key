// Menú móvil
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('open');
});

// Cerrar menú al hacer clic en un enlace (para móvil)
document.querySelectorAll('.nav-principal a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mainNav').classList.remove('open');
    });
});

// Swiper Hero (solo si existe en la página)
if (document.querySelector('.mySwiperHero')) {
    const heroSwiper = new Swiper('.mySwiperHero', {
        loop: true,
        autoplay: { delay: 5000 },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true }
    });
}

// Swiper Trayectoria (solo si existe en la página)
if (document.querySelector('.mySwiperHistorias')) {
    const historiasSwiper = new Swiper('.mySwiperHistorias', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: '.swiper-pagination-historias',
            clickable: true
        },
        autoplay: { delay: 5000 },
        loop: true
    });
}

// Contadores animados (solo si existen en la página)
const counters = document.querySelectorAll('.numero[data-target]');
if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.target);
                let current = 0;
                const step = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        clearInterval(timer);
                        el.textContent = target;
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 30);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}
