export interface Product {
    name: string,
    url: string,
    price: number,
    description: string,
    sizes_available: string[],
    quantity_available: number,
    quantity_cart?: number,
    images: ImagemProduto[];
}

interface ImagemProduto {
    url: string,
    description: string
}

export class ProductList {
    private products: Product[];
    constructor() {
        this.products = [];
    }

    addProduct(product: Product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProduct(index: number) {
        return this.products[index];
    }

    quantityCheck(product: Product) {
        if (<number>product.quantity_cart > product.quantity_available) {
            return false;
        }
        return true;
    }

    updateQuantity(product: Product, quantity: number) {
        product.quantity_cart = quantity;
    }
    
    removeProduct(index: number) {
        this.products.splice(index, 1);
    }

    removeUnit(product: Product) {
        product.quantity_available--;
    }

    getTotal(products: Product[]) {
        return products.reduce((acum, current) => current.price * <number>current.quantity_cart + acum, 0);
    }
    
    findProduct(name: string) {
        return this.products.find(product => product.url === name);
    }

}
