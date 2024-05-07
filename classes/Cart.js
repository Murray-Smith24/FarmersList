class Cart {
    constructor() {
        this.total = 0;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        this.total++;
    }

    removeProduct(product) {
        this.products.splice(product, 1);
        this.total--;
    }
}

module.exports = {
    Cart
};