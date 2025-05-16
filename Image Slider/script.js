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

    imageContainer.style.transform = `translateX(${-idx * 500}px)`;
}

prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    }
});