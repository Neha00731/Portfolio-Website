// Show sections with animation when they come into view
const sections = document.querySelectorAll('.section');

function checkVisibility() {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', checkVisibility);

// Initial check on page load
document.addEventListener('DOMContentLoaded', checkVisibility);

// Smooth Scroll for navigation links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
