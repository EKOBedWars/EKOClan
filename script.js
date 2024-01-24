document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
        }
    });

    // Smooth transitions between pages
    sections.forEach(section => {
        section.addEventListener('click', function () {
            sections.forEach(s => s.classList.remove('active'));
            section.classList.add('active');
            nav.classList.remove('show');
        });
    });
});
