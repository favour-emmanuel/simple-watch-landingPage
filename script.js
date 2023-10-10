const mobileIcon = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('ul')

mobileIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});