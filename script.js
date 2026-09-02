// Menú móvil
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('open');
});

// Swiper Hero
const heroSwiper = new Swiper('.mySwiperHero', {
    loop: true,
    autoplay: { delay: 5000 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true }
});

// Swiper Historias de Éxito
const historiasSwiper = new Swiper('.mySwiperHistorias', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    autoplay: { delay: 5000 }
});

// Swiper Aliados
const aliadosSwiper = new Swiper('.mySwiperAliados', {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 }
    },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    autoplay: { delay: 4000 }
});

// Contadores animados (Pilares)
const counters = document.querySelectorAll('.numero[data-target]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseFloat(el.dataset.target);
            let current = 0;
            const step = target / 60;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(timer);
                    el.textContent = target;
                } else {
                    el.textContent = current.toFixed(1);
                }
            }, 30);
            observer.unobserve(el);
        }
    });
}, { threshold: 0.5 });
counters.forEach(c => observer.observe(c));
