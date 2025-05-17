const imageContainer = document.getElementById('image-container');
const images = document.querySelectorAll('#image-container img')
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

let idx = 0;

function changeSlide(direction = 1) {

    idx += direction;

    if (idx > images.length - 1) {
        idx = 0;
    } if (idx < 0) {
        idx = images.length - 1;
    }

    const width = images[0].offsetWidth;
    imageContainer.style.transform = `translateX(${-idx * width}px)`;
    resetInterval();
}

let interval = setInterval(changeSlide, 4000);

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(changeSlide, 4000);
}

// Next and prev buttons
prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));

// Right and left arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    }
});

// Swipe handling
let startX = 0;
let endX = 0;

imageContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

imageContainer.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const deltaX = endX - startX;
    const threshold = 30; // Minimum swipe distance

    if (deltaX > threshold) {
        changeSlide(-1);
    } else if (deltaX < -threshold) {
        changeSlide(1);
    }
}

// Recalculate slide position on window resize.
window.addEventListener('resize', () => {
    changeSlide(0);
});