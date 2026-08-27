document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const nav = document.getElementById('site-nav');
    if (!mobileMenuButton || !nav) return;

    mobileMenuButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
        mobileMenuButton.textContent = isOpen ? 'Close' : 'Menu';
    });
});
