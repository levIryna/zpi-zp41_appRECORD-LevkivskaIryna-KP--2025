function createProduct(obj, callback) {
    const product = { ...obj, id: Date.now() };

    callback(product);
}

function logProduct(product) {
    console.log('Product:', product);
}

function logTotalPrice(product) {
    const totalPrice = product.price * product.quantity;
    console.log('Total Price:', totalPrice);
}

const newProduct = { name: 'Laptop', price: 1000, quantity: 2 };
createProduct(newProduct, logProduct);
createProduct(newProduct, logTotalPrice);
