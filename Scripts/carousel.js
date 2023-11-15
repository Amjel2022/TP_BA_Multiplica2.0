//CAROUSEL DE LA CLASE 12!
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');

//Constantes de los botones:
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentSlide = 0;

//DEfiniendo función:
function showSlide(slideIndex) {
    carouselSlides.foreEach(slide => slide.style.display = 'none');
    carouselSlides[slideIndex].style.display = 'block';
}

//Función nextslide:
function nextSlide(slideIndex) {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    showSlide(currentSlide);
}

//Función prevslide:
function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(currentSlide);
}

//Mostrar la primera diapositiva: 
showSlide(currentSlide);

//Avanzando haciendo click:
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

//Función para que avancen automaticamente las fotos del carousel:
let continuidad;
const acelerar = 400;

function startAutoslide() {
    continuidad = setInterval(nextSlide, acelerar);
}

startAutoslide();





