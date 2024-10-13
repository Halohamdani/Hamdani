// Typed.js untuk teks animasi
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Businessman"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('hide'); // Add class to hide header
    } else {
        // Scrolling up
        header.classList.remove('hide'); // Remove class to show header
    }
    lastScrollTop = scrollTop; // Update last scroll position
});
