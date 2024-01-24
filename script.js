document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const sections = document.querySelectorAll('section');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('show');
        main.classList.toggle('show');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            main.classList.remove('show');
        }
    });

    sections.forEach(section => {
        section.addEventListener('click', function () {
            sections.forEach(s => s.classList.remove('active'));
            section.classList.add('active');
            nav.classList.remove('show');
            main.classList.remove('show');
        });
    });

    // Check if a specific section is targeted in the URL
    const hash = window.location.hash;
    const targetSection = document.querySelector(hash);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
