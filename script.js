const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.nav-menu');

bars.addEventListener('click', () => {
    bars.classList.toggle("show");
    navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-menu li a").forEach(n => n.addEventListener('click', function () {
    bars.classList.remove('show');
    navMenu.classList.remove('show');
}));