class Auth {
    constructor() {
        this.customers = [];
    }
    register(name, email, shippingAddress) {
        const newAcc = new Customer(this.name, this.email, this.shippingAddress);
    }
    login(email) {
        for(let i = 0; i < this.customers.length; i++) {
            if(email === this.customers[i]['email']) {

            }
        }
    }
}

module.exports = {
    Auth
};