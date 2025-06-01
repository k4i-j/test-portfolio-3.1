// Modal for project details
const modal = document.getElementById('projectModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalOverview = document.getElementById('modalOverview');
const modalTech = document.getElementById('modalTech');
const modalRole = document.getElementById('modalRole');
const modalChallenges = document.getElementById('modalChallenges');

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalOverview.textContent = card.dataset.overview;
    modalTech.textContent = card.dataset.tech;
    modalRole.textContent = card.dataset.role;
    modalChallenges.textContent = card.dataset.challenges;
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
