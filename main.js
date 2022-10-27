const desktopMenu = document.querySelector('.desktopMenu');
const mobileMenu = document.querySelector('.mobileMenu');
const shoppingCart = document.querySelector('.productDetails')
const cardsContainer = document.querySelector('.cardsContainer') // Clase para iterar array de productos.
const productDetailsAside = document.querySelector('.productDetailsAside')

/* Botones */
const menuEmail = document.querySelector('.navbarEmail');
const burgerMenu = document.querySelector('.burgerMenu');
const myOrderMenu = document.querySelector('.navbarShoppingCart');
const btnProducDetailsClose = document.querySelector('.producDetails__close');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
myOrderMenu.addEventListener('click', toggleMyOrderMenu);
btnProducDetailsClose.addEventListener('click', producDetailsClose);


function toggleDesktopMenu() {
    const isShoppingCartOpen = shoppingCart.classList.contains('inactive')
    const isDetailsProductsOpen = productDetailsAside.classList.contains('inactive')

    if (!isShoppingCartOpen) {
        shoppingCart.classList.add('inactive')
    } else if (!isDetailsProductsOpen){
        productDetailsAside.classList.add('inactive')
    } // Validamos si la variable shoppingCart tiene la clase inactive (si no es asi entonces se la agregamos.)
    desktopMenu.classList.toggle('inactive'); // toggle = El funcionamiento de toggle es cambiar en este caso la clase, la quita si la tiene puesta cuando hagamos click, o la agrega si no la tiene cuando hagamos click.
}
function toggleMobileMenu() {
    const isShoppingCartOpen = shoppingCart.classList.contains('inactive') 
    const isDetailsProductsOpen = productDetailsAside.classList.contains('inactive')

    if (!isShoppingCartOpen) {
        shoppingCart.classList.add('inactive')
    } else if (!isDetailsProductsOpen){
        productDetailsAside.classList.add('inactive')
    } // Validamos si la variable shoppingCart tiene la clase inactive (si no es asi entonces se la agregamos.)

    mobileMenu.classList.toggle('inactive');
}
function toggleMyOrderMenu() {
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive')
    const isMenuEmailOpen = menuEmail.classList.contains('inactive')
    const isDetailsProductsOpen = productDetailsAside.classList.contains('inactive')

    if (!isMobileMenuOpen) {
        mobileMenu.classList.add ('inactive');
    } else if (!isMenuEmailOpen) {
        desktopMenu.classList.add ('inactive');
    }
    
    if (!isDetailsProductsOpen){
        productDetailsAside.classList.add('inactive')
    }

    shoppingCart.classList.toggle('inactive');
}
function OpenProductDetailsAside() {
    const isShoppingCartOpen = shoppingCart.classList.contains('inactive') 
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive')
    const isMenuEmailOpen = menuEmail.classList.contains('inactive')

    if (!isShoppingCartOpen) {
        shoppingCart.classList.add('inactive')
    } else if (!isMobileMenuOpen) {
        mobileMenu.classList.add ('inactive');
    } else if (!isMenuEmailOpen) {
        desktopMenu.classList.add ('inactive');
    } else{
        return
    }

    productDetailsAside.classList.remove('inactive')
}
function producDetailsClose() {
    productDetailsAside.classList.add('inactive')
}


// Lista de productos a partir de un array
const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productsList.push({
    name: 'Car',
    price: 4500,
    image: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/11/210922163312-04-lucid-air-electric-cars-full-169.jpg?quality=100&strip=info',
})
productsList.push({
    name: 'PC',
    price: 1200,
    image: 'https://blog.seccionamarilla.com.mx/wp-content/uploads/2020/06/pc-gamer-barata-partes-y-ycaracteristicas-770x578.jpg',
})
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productsList.push({
    name: 'Car',
    price: 4500,
    image: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/11/210922163312-04-lucid-air-electric-cars-full-169.jpg?quality=100&strip=info',
})
productsList.push({
    name: 'PC',
    price: 1200,
    image: 'https://blog.seccionamarilla.com.mx/wp-content/uploads/2020/06/pc-gamer-barata-partes-y-ycaracteristicas-770x578.jpg',
})
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productsList.push({
    name: 'Car',
    price: 4500,
    image: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/11/210922163312-04-lucid-air-electric-cars-full-169.jpg?quality=100&strip=info',
})
productsList.push({
    name: 'PC',
    price: 1200,
    image: 'https://blog.seccionamarilla.com.mx/wp-content/uploads/2020/06/pc-gamer-barata-partes-y-ycaracteristicas-770x578.jpg',
})

function renderProducts(arr) {
    for (const product of productsList) {
        // Creando las variables y agregandole los atributos/clases necesarias.
    
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', OpenProductDetailsAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('productInfo');
    
        const productInfoDiv = document.createElement('div')
    
        const price = document.createElement('p')
        price.innerHTML = '$' + product.price
    
        const name = document.createElement('p')
        name.innerHTML = product.name;
    
        const productInfoFigure = document.createElement('figure')
    
        const figureImg = document.createElement('img')
        figureImg.setAttribute('src', './assets/Icons/bt_add_to_cart.svg')
    
        // Iterando HTML
    
        productInfoFigure.appendChild(figureImg)
        productInfoDiv.append(price, name)
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfo)
    
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productsList);