// Фоновое видео
const bgVideo = document.getElementById('bgVideo');

bgVideo.play().catch(() => {
    document.body.addEventListener('click', () => bgVideo.play(), { once: true });
});