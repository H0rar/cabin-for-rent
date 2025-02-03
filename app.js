// Rolling menu
document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.menu-bar').classList.toggle('active');
});

// Sticky menu bar by scrooling
window.addEventListener('scroll', () => {
    const menuBar = document.querySelector('.menu-bar');
    if (window.scrollY > 100) { // Ak posunieš stránku o 100px
        menuBar.classList.add('sticky');
    } else {
        menuBar.classList.remove('sticky');
    }
});

// Picture visibility by scrooling
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function changeImage() {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % images.length;

    images[previousIndex].classList.remove('active');
    images[previousIndex].classList.add('previous');

    images[currentIndex].classList.add('active');
    images[currentIndex].classList.remove('previous');
}

// Inicialization
images[currentIndex].classList.add('active');

// Automatic pic change every 5s
setInterval(changeImage, 5000);