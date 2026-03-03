// Animación tipo rebote (bounce in) para header, perfil y footer
window.addEventListener('DOMContentLoaded', function() {
    const fadeElements = [
        document.querySelector('header'),
        document.querySelector('.perfil'),
        document.querySelector('footer')
    ];
    fadeElements.forEach((el, i) => {
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateY(100px) scale(0.8)';
            setTimeout(() => {
                el.style.transition = 'opacity 0.5s, transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
                el.style.opacity = 1;
                el.style.transform = 'translateY(-20px) scale(1.05)';
                setTimeout(() => {
                    el.style.transition = 'transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)';
                    el.style.transform = 'translateY(0) scale(1)';
                }, 400);
            }, 300 + i * 300);
        }
    });
});
