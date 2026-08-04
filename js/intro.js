const introVideo = document.getElementById('introVideo');
const introOverlay = document.getElementById('introOverlay');
const xoxDecor = document.getElementById('xoxDecor');
const squaresDecor = document.getElementById('squaresDecor');

introVideo.addEventListener('ended', () => {
    introOverlay.classList.add('fade-out');
    // Плавно показываем декор после начала исчезновения интро
    setTimeout(() => {
        xoxDecor.classList.add('visible');
        squaresDecor.classList.add('visible');
    }, 500);
});
introVideo.play().catch(() => {
    document.body.addEventListener('click', () => introVideo.play(), { once: true });
});