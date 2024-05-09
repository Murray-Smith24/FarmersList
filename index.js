// Import Classes Here

const { Product } = require('./classes/Product');
const { Auth } = require('./classes/Auth');
const { Cart } = require('./classes/Cart');
const { Customer } = require('./classes/Customer');

// import Product from './classes/Product'
// import Auth from './classes/Auth'
// import Cart from './classes/Cart'
// import Customer from './classes/Customer'

// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}