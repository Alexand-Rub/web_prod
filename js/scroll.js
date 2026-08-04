// Линия скролла
const scrollThumb = document.getElementById('scrollThumb');
const trackHeight = 200;
const thumbHeight = 40;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    const maxTop = trackHeight - thumbHeight;
    const thumbTop = scrollPercent * maxTop;
    scrollThumb.style.top = thumbTop + 'px';
});