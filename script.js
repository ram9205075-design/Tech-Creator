// Ram's Creative Engine - JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    const mainSite = document.getElementById('main-site');
    const initBtn = document.getElementById('init-btn');

    // 1. Splash Entrance
    initBtn.addEventListener('click', () => {
        splash.style.opacity = '0';
        splash.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            splash.style.display = 'none';
            mainSite.style.display = 'block';
            // Start scroll observer
            reveal();
        }, 800);
    });

    // 2. Interactive Click Particles
    window.addEventListener('mousedown', (e) => {
        for (let i = 0; i < 4; i++) {
            const p = document.createElement('div');
            p.className = 'particle-neon';
            p.style.left = `${e.clientX}px`;
            p.style.top = `${e.clientY}px`;
            
            // Toggle between Brand Green and Electric Blue
            const color = i % 2 === 0 ? '#a8ff00' : '#00d4ff';
            p.style.borderColor = color;
            
            document.body.appendChild(p);
            setTimeout(() => p.remove(), 700);
        }
    });

    // 3. Scroll Reveal Engine
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    // Run reveal on scroll
    window.addEventListener('scroll', reveal);
});
