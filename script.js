const hamburgerIcon = document.querySelector('.hamburger');
const navMenuIcon = document.querySelector('.nav__menu');


hamburgerIcon.addEventListener('click', ()=>{
    // alert('hello')
    hamburgerIcon.classList.toggle('active');
    navMenuIcon.classList.toggle('active')
})

document.querySelectorAll('.nav__links').forEach(n => n.addEventListener('click', ()=> {
    hamburgerIcon.classList.remove('active');
    navMenuIcon.classList.remove('active');
}))