const menuEmail = document.querySelector('.navbarEmail');
const desktopMenu = document.querySelector('.desktopMenu');
const burgerMenu = document.querySelector('.burgerMenu');
const mobileMenu = document.querySelector('.mobileMenu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); // toggle = El funcionamiento de toggle es cambiar en este caso la clase, la quita si la tiene puesta cuando hagamos click, o la agrega si no la tiene cuando hagamos click.
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}