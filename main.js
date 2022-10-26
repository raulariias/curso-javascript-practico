const desktopMenu = document.querySelector('.desktopMenu');
const mobileMenu = document.querySelector('.mobileMenu');
const shoppingCart = document.querySelector('.productDetails')

/* Botones */
const menuEmail = document.querySelector('.navbarEmail');
const burgerMenu = document.querySelector('.burgerMenu');
const myOrderMenu = document.querySelector('.navbarShoppingCart');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
myOrderMenu.addEventListener('click', toggleMyOrderMenu)


function toggleDesktopMenu() {
    const isShoppingCartOpen = shoppingCart.classList.contains('inactive') 

    if (!isShoppingCartOpen) {
        shoppingCart.classList.add('inactive')
    } // Validamos si la variable shoppingCart tiene la clase inactive (si no es asi entonces se la agregamos.)
    desktopMenu.classList.toggle('inactive'); // toggle = El funcionamiento de toggle es cambiar en este caso la clase, la quita si la tiene puesta cuando hagamos click, o la agrega si no la tiene cuando hagamos click.
}
function toggleMobileMenu() {
    const isShoppingCartOpen = shoppingCart.classList.contains('inactive') 

    if (!isShoppingCartOpen) {
        shoppingCart.classList.add('inactive')
    } // Validamos si la variable shoppingCart tiene la clase inactive (si no es asi entonces se la agregamos.)

    mobileMenu.classList.toggle('inactive');
}
function toggleMyOrderMenu() {
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive')
    const isMenuEmailOpen = menuEmail.classList.contains('inactive')

    if (!isMobileMenuOpen) {
        mobileMenu.classList.add ('inactive');
    } else if (!isMenuEmailOpen) {
        desktopMenu.classList.add ('inactive');
    } else {
        return
    }
    shoppingCart.classList.toggle('inactive');
}