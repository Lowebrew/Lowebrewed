// Placeholder main script for navigation logic and interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Lowebrewed site loaded successfully.');

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.querySelectorAll('.nav-link');

    // In a real implementation, this would handle the mobile drawer toggle
    if (mobileMenuButton) {
        mobileMenu             = false;
        mobileMenuButton.addEventListener('click', () => {
            console.log('Mobile menu toggled');
            // Logic to show/hide mobile navigation
        });
    }

    // Highlight active link based on current URL path
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (currentPath === link.getAttribute('href') || 
            (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active-link');
        }
    });
});
