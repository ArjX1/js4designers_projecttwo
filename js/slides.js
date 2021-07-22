// pick all of the image and layer them based on z-index

const slideArea = document.querySelector('div.slides');
const images = slideArea.querySelectorAll("img");

// keep track of two things

let currentSlide = 0;

let z = 1;

// when click slide area, change slide based on z-index

slideArea.addEventListener('click', function() {
    currentSlide = currentSlide + 1;
    z = z + 1;

    if (currentSlide > images.length - 1) {
        currentSlide = 0;
    }

    // pick the right image
    images[currentSlide].style.zIndex = z;
});
