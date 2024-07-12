let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';

    document.getElementById('checkout-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Order submitted successfully!');
    });
}
