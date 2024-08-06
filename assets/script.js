// code found online for animations

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
const fadeinElements = document.querySelectorAll('.fadein');
const staggerElements = document.querySelectorAll('.logo');
const fadeDownElement = document.querySelector('#contact h2');
const fadeUpElement = document.querySelector('#contact a');
hiddenElements.forEach(el => observer.observe(el));
fadeinElements.forEach(el => observer.observe(el));
staggerElements.forEach(el => observer.observe(el));
observer.observe(fadeDownElement);
observer.observe(fadeUpElement);