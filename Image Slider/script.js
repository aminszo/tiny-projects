const images = document.getElementById('image-container');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

let idx = 0;

function changeSlide() {
    if (idx > images.length - 1) {
        idx = 0;
    } if (idx < 0) {
        idx = images.length - 1;
    }

    images.style.transform = `translateX(${-idx * 500}px)`;
}

prevBtn.addEventListener('click', () => {
    idx--;
    changeSlide();
});