/* home_back-header_slider */

let fon = 0;
let image = document.getElementById("home-slide");
let slides = ['home-header_slider home-header_slider_background1', 'home-header_slider home-header_slider_background2', 'home-header_slider home-header_slider_background3'];

function nextSlide() {
    if (fon === 2) {
        fon = -1
    }
    fon++;
    image.className = slides[fon];
}

function backSlide() {
    if (fon === 0) {
        fon = 3
    }
    fon--;
    image.className = slides[fon];
}