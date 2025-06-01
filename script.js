// Carousel JS
const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const leftBtn = document.querySelector('.carousel-arrow.left');
const rightBtn = document.querySelector('.carousel-arrow.right');

let currentIndex = 0;
const visibleSlides = 3;
const slideWidth = slides[0].getBoundingClientRect().width + 15;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  leftBtn.disabled = currentIndex === 0;
  rightBtn.disabled = currentIndex >= slides.length - visibleSlides;
}

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

rightBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
    updateCarousel();
  }
});

updateCarousel();

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
