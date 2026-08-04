// Плеер showreel

const showreelVideo = document.getElementById('showreelVideo');
const playBtn = document.getElementById('playBtn');
const playerContainer = document.getElementById('playerContainer');
const fullscreenBtn = document.getElementById('fullscreenBtn');

playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showreelVideo.play();
    playBtn.classList.add('hidden');
});

playerContainer.addEventListener('click', (e) => {
    if (e.target.closest('.fullscreen-btn')) return;
    if (showreelVideo.paused) {
        showreelVideo.play();
        playBtn.classList.add('hidden');
    } else {
        showreelVideo.pause();
        playBtn.classList.remove('hidden');
    }
});

showreelVideo.addEventListener('ended', () => {
    playBtn.classList.remove('hidden');
});

fullscreenBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
        playerContainer.requestFullscreen().catch(err => {
            console.log('Fullscreen error:', err);
        });
    } else {
        document.exitFullscreen();
    }
});