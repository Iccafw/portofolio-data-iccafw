// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Project accordion — only one open at a time
const projectRows = document.querySelectorAll('.project-row');
projectRows.forEach(row => {
  const summary = row.querySelector('.project-summary');
  summary.addEventListener('click', () => {
    const isOpen = row.getAttribute('data-open') === 'true';
    projectRows.forEach(r => {
      r.setAttribute('data-open', 'false');
      r.querySelector('.project-summary').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      row.setAttribute('data-open', 'true');
      summary.setAttribute('aria-expanded', 'true');
    }
  });
});

// Open the first project by default on larger screens
if (window.innerWidth > 640 && projectRows.length) {
  const first = projectRows[0];
  first.setAttribute('data-open', 'true');
  first.querySelector('.project-summary').setAttribute('aria-expanded', 'true');
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
