// Carousel functionality
const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const leftBtn = document.querySelector('.carousel-arrow.left');
const rightBtn = document.querySelector('.carousel-arrow.right');

let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width + 15; // slide width + margin

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

leftBtn.addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  updateCarousel();
});

rightBtn.addEventListener('click', () => {
  currentIndex = Math.min(slides.length - 3, currentIndex + 1); // Show 3 slides max at once
  updateCarousel();
});

// Modal for project details
const modal = document.getElementById('projectModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalOverview = document.getElementById('modalOverview');
const modalTech = document.getElementById('modalTech');
const modalRole = document.getElementById('modalRole');
const modalChallenges = document.getElementById('modalChallenges');

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    modalTitle.textContent = slide.dataset.title;
    modalOverview.textContent = slide.dataset.overview;
    modalTech.textContent = slide.dataset.tech;
    modalRole.textContent = slide.dataset.role;
    modalChallenges.textContent = slide.dataset.challenges;
    modal.style.display = 'flex';
  });
});

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Tabs for testimonials and awards
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.target;
    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === target);
    });
  });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
