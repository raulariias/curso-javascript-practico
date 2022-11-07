const desktopMenu = document.querySelector('.desktopMenu');
const mobileMenu = document.querySelector('.mobileMenu');
const shoppingCart = document.querySelector('.productDetails')
const cardsContainer = document.querySelector('.cardsContainer') // Clase para iterar array de productos.
const productDetailsAside = document.querySelector('.productDetailsAside')
const oscurecer = document.querySelector('.oscurecer')
const avisoContainer = document.querySelector('.avisoContainer')
const navbar = document.querySelector('.navbar')
const main = document.querySelector('.mainContainer')

/* Botones */
const menuEmail = document.querySelector('.navbarEmail');
const burgerMenu = document.querySelector('.burgerMenu');
const myOrderMenu = document.querySelector('.navbarShoppingCart');
const btnProducDetailsClose = document.querySelector('.producDetails__close');
const btnMyOrderMenuClose = document.querySelector('.btnMyOrderMenuClose')

window.addEventListener('scroll', navfixed)
function navfixed() {
    navbar.classList.add('onscroll')
    shoppingCart.classList.add('onscroll', 'seisRem')
    main.classList.add('ochoRem')
    productDetailsAside.classList.add('onscroll', 'seisRem')
    avisoContainer.classList.add('inactive')
    console.log('sadasd');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
myOrderMenu.addEventListener('click', toggleMyOrderMenu);
btnProducDetailsClose.addEventListener('click', producDetailsClose);
oscurecer.addEventListener('click', clickOnOscurecer);
btnMyOrderMenuClose.addEventListener('click', myOrderClose);
avisoContainer.addEventListener('click', cerrarAviso)

function cerrarAviso() {
    avisoContainer.classList.add('inactive')
}
function toggleDesktopMenu() {
    productDetailsAside.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive'); // toggle = El funcionamiento de toggle es cambiar en este caso la clase, la quita si la tiene puesta cuando hagamos click, o la agrega si no la tiene cuando hagamos click.

    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')

    if (!isDesktopMenuClose) {
        oscurecer.classList.remove('inactive');
    } else {
        oscurecer.classList.add('inactive');
    }
}
function toggleMobileMenu() {
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailsAside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

    const isMobileMenuClose = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClose) {
        oscurecer.classList.remove('inactive');
    } else {
        oscurecer.classList.add('inactive');
    }
}
function toggleMyOrderMenu() {
    desktopMenu.classList.add ('inactive');
    mobileMenu.classList.add ('inactive');
    productDetailsAside.classList.add('inactive')
    shoppingCart.classList.toggle('inactive');

    const isMyOrderMenuClose = shoppingCart.classList.contains('inactive')

    if (!isMyOrderMenuClose) {
        oscurecer.classList.remove('inactive');
    } else {
        oscurecer.classList.add('inactive');
    }
}
function OpenProductDetailsAside() {
    shoppingCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailsAside.classList.toggle('inactive');

    const isProductDetailsAsideClose = productDetailsAside.classList.contains('inactive');

    if (!isProductDetailsAsideClose) {
        oscurecer.classList.remove('inactive');
    } else {
        oscurecer.classList.add('inactive');
    }
}
function producDetailsClose() {
    productDetailsAside.classList.add('inactive')
    oscurecer.classList.add('inactive');
}
function clickOnOscurecer() {
    shoppingCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailsAside.classList.add('inactive');
    oscurecer.classList.add('inactive');
}
function myOrderClose() {
    shoppingCart.classList.add('inactive')
    oscurecer.classList.add('inactive');
}


// Lista de productos a partir de un array
const productsList = [];

for (let index = 30; index > productsList.length; index--) {
    productsList.push({
        name: 'Bike',
        price: 30,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    })
}

function renderProducts(arr) {
    for (const product of productsList) {
        // Creando las variables y agregandole los atributos/clases necesarias.
    
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', OpenProductDetailsAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('productInfo');
    
        const productInfoDiv = document.createElement('div')
    
        const price = document.createElement('p')
        price.innerText = '$' + product.price
    
        const name = document.createElement('p')
        name.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure')
    
        const figureImg = document.createElement('img')
        figureImg.setAttribute('src', './assets/Icons/bt_add_to_cart.svg')
        figureImg.addEventListener('click', agregarAlCarrito)
    
        // Iterando HTML
    
        productInfoFigure.appendChild(figureImg)
        productInfoDiv.append(price, name)
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfo)
    
    
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productsList);

const nCarrito = document.querySelector('.nCarrito');
const myOrderContainer = document.querySelector('.myOrderContent');
const priceTotal = document.querySelector('.total');
let total = 0;
let shoppingCardG = [];
function agregarAlCarrito() {
    nCarrito.innerText++

    const shoppingCardDiv = document.createElement('div')
    shoppingCardDiv.classList.add('shoppingCard')
    shoppingCardG.push(shoppingCardDiv)

    const figureShopping = document.createElement('figure')
    const figureImg = document.createElement('img')
    figureImg.setAttribute('src', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')

    const name = document.createElement('p')
    name.innerText = 'Bike'

    const price = document.createElement('p')
    price.innerText = '$ ' + 30

    const equis = document.createElement('img')
    equis.setAttribute('src', './assets/Icons/icon_close.png')
    equis.addEventListener('click', removeItem)

    shoppingCardDiv.append(figureShopping, name, price, equis)
    figureShopping.appendChild(figureImg)
    myOrderContainer.appendChild(shoppingCardDiv)

    total += 30

    priceTotal.innerText = total
}
function removeItem() {
    myOrderContainer.removeChild(shoppingCardG.pop())
    total -= 30
    priceTotal.innerText = total
    nCarrito.innerText--
}