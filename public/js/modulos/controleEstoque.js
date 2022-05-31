export class ProductList {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
    getProduct(index) {
        return this.products[index];
    }
    quantityCheck(product) {
        if (product.quantity_cart > product.quantity_available) {
            return false;
        }
        return true;
    }
    updateQuantity(product, quantity) {
        product.quantity_cart = quantity;
    }
    removeProduct(index) {
        this.products.splice(index, 1);
    }
    getTotal(products) {
        return products.reduce((acum, current) => current.price * current.quantity_cart + acum, 0);
    }
    findProduct(name) {
        return this.products.find(product => product.url === name);
    }
}
