//load from localStorage
let products = localStorage.getItem('estoque');
//cast from String to object
products = JSON.parse(products);
console.log(products);

//Create image and sizes div
const divSelector = document.querySelectorAll(".products-wrapper");
//console.log(divSelector);

function createMainDiv(item) {
    const prod = document.createElement("div");
    prod.classList.add("main__section--product-list-section-1__list-itens");
    item.appendChild(prod);
}

divSelector.forEach(element => createMainDiv(element));

//Create tag a link for image 
const links = document.querySelectorAll(".main__section--product-list-section-1__list-itens");
//console.log(links);

function createLinks(item) {
    const link = document.createElement("a");
    link.classList.add("product-link");
    link.href = "detalhes.html";
    item.appendChild(link);
}

links.forEach(element => createLinks(element));

//Create product image

const images = document.querySelectorAll(".product-link");
//console.log(images);

function createImages(item) {
    const image = document.createElement("img");
    image.classList.add("product-image");
    image.src = "../src/cropped.png";
    image.alt = "Foto do produto";
    //image.width = "269px";
    //image.height = "209px";
    item.appendChild(image);
}

images.forEach(element => createImages(element));

//Create sizes div
const sizes = document.querySelectorAll(".main__section--product-list-section-1__list-itens");
console.log(sizes);

function createSizes(item) {
    const size = document.createElement("div");
    size.classList.add("main__section--product-list-section-1__sizes");
    item.appendChild(size);
}

sizes.forEach(element => createSizes(element));

//create sizes
const sizesItems = document.querySelectorAll(".main__section--product-list-section-1__sizes");

function createSizesItems(item) {
    const sizeItemP = document.createElement("p")
    sizeItemP.classList.add("main__section--product-list-section-1__sizes__itens");
    sizeItemP.innerText = "P";
    item.appendChild(sizeItemP);

    const sizeItemM = document.createElement("p")
    sizeItemM.classList.add("main__section--product-list-section-1__sizes__itens");
    sizeItemM.innerText = "M";
    item.appendChild(sizeItemM);

    const sizeItemG = document.createElement("p")
    sizeItemG.classList.add("main__section--product-list-section-1__sizes__itens");
    sizeItemG.innerText = "G";
    item.appendChild(sizeItemG);
}

sizesItems.forEach(element => createSizesItems(element));

//create Item text div
const itemTexts = document.querySelectorAll(".products-wrapper");

function createItemTexts(item) {
    const itemText = document.createElement("div");
    itemText.classList.add("item-text");
    item.appendChild(itemText);
}

itemTexts.forEach(element => createItemTexts(element));

//create Item text name and price
const itemContents = document.querySelectorAll(".item-text");

function createItemContent(item) {
    const itemText = document.createElement("p");
    itemText.setAttribute("id", "productName");
    itemText.textContent = "Cropped preto AK by Riachuelo";
    item.appendChild(itemText);

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = "R$ 29,90";
    item.appendChild(itemPrice);
}

itemContents.forEach(element => createItemContent(element));

//create add to bag button div
const buttonDivs = document.querySelectorAll(".products-wrapper");

function createButtonDiv(item) {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("add-to-bag-button");
    item.appendChild(buttonDiv);
}

buttonDivs.forEach(element => createButtonDiv(element));

//create button text
const buttonTexts = document.querySelectorAll(".add-to-bag-button");

function createButtonText(item) {
    const buttonText = document.createElement("p");
    buttonText.classList.add("card-front__text");
    buttonText.textContent = "ADICIONAR À SACOLA";
    item.appendChild(buttonText);
}

buttonTexts.forEach(element => createButtonText(element));

//create shopping cart button
const buttonShoppinCarts = document.querySelectorAll(".add-to-bag-button");

function createButtonShoppingCart(item) {
    const buttonShoppinCart = document.createElement("button");
    buttonShoppinCart.classList.add("shopping-cart")
    item.appendChild(buttonShoppinCart);
}

buttonShoppinCarts.forEach(element => createButtonShoppingCart(element));

//create shopping cart image on button
const buttonImages = document.querySelectorAll(".shopping-cart");

function createButtonImage(item) {
    const buttonImage = document.createElement("img");
    buttonImage.src = "../src/sacolinha_branca.svg";
    item.appendChild(buttonImage);
}

buttonImages.forEach(element => createButtonImage(element));