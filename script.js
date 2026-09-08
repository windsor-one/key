// ===== MENÚ MÓVIL =====
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('open');
});

// Cerrar menú al hacer clic en un enlace (para móvil)
document.querySelectorAll('.nav-principal a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mainNav').classList.remove('open');
    });
});

// ===== SWIPER HERO =====
if (document.querySelector('.mySwiperHero')) {
    const heroSwiper = new Swiper('.mySwiperHero', {
        loop: true,
        autoplay: { delay: 5000 },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true }
    });
}

// ===== SWIPER TRAYECTORIA =====
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

// ===== CONTADORES ANIMADOS (solo para index) =====
const counters = document.querySelectorAll('.numero[data-target]');
if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
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

// ===== BOTÓN FLOTANTE DE DONACIÓN (esquina inferior izquierda) =====
(function() {
    const btnDonar = document.createElement('a');
    btnDonar.href = 'donar.html';
    btnDonar.innerHTML = '<i class="fas fa-heart" style="margin-right: 8px;"></i> DONAR';
    btnDonar.setAttribute('aria-label', 'Donar a Key');
    
    btnDonar.style.position = 'fixed';
    btnDonar.style.bottom = '30px';
    btnDonar.style.left = '30px';
    btnDonar.style.zIndex = '9999';
    btnDonar.style.display = 'inline-flex';
    btnDonar.style.alignItems = 'center';
    btnDonar.style.justifyContent = 'center';
    btnDonar.style.gap = '8px';
    btnDonar.style.backgroundColor = '#FF6D00';
    btnDonar.style.color = '#fff';
    btnDonar.style.padding = '14px 28px';
    btnDonar.style.borderRadius = '50px';
    btnDonar.style.fontWeight = '700';
    btnDonar.style.fontSize = '1.1rem';
    btnDonar.style.fontFamily = "'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
    btnDonar.style.textDecoration = 'none';
    btnDonar.style.boxShadow = '0 8px 30px rgba(255, 109, 0, 0.4)';
    btnDonar.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    btnDonar.style.border = 'none';
    btnDonar.style.cursor = 'pointer';
    btnDonar.style.letterSpacing = '0.5px';
    
    btnDonar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08) translateY(-4px)';
        this.style.boxShadow = '0 12px 40px rgba(255, 109, 0, 0.6)';
        this.style.backgroundColor = '#E65100';
    });
    btnDonar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
        this.style.boxShadow = '0 8px 30px rgba(255, 109, 0, 0.4)';
        this.style.backgroundColor = '#FF6D00';
    });
    
    document.body.appendChild(btnDonar);
})();
