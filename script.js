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
    // Remove 'active' from all buttons
    tabButtons.forEach(b => b.classList.remove('active'));
    // Add 'active' to clicked button
    btn.classList.add('active');

    const targetId = btn.dataset.target;
    tabContents.forEach(content => {
      if (content.id === targetId) {
        content.classList.add('active');
        content.style.display = 'block';  // Show active tab content
      } else {
        content.classList.remove('active');
        content.style.display = 'none';   // Hide others
      }
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
