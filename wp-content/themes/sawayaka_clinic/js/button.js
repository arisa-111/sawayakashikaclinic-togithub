const buttons = document.querySelectorAll('.touch-press');

buttons.forEach(btn => {
    btn.addEventListener('touchstart', () => {
        btn.classList.add('is-pressed');
    });

    btn.addEventListener('touchend', () => {
        btn.classList.remove('is-pressed');
    });

    btn.addEventListener('touchcancel', () => {
        btn.classList.remove('is-pressed');
    });
});
