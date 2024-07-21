// Get elements
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');
const trackBtn = document.getElementById('track-btn');
const paymentForm = document.getElementById('payment-form');
const payBtn = document.getElementById('pay-btn');

// Products data
const products = [
    { id: 1, name: 'Product 1', price: 10.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 9.99, image: 'product2.jpg' },
    // Add more products here
];

// Render products
products.forEach((product) => {
    const productHTML = `
        <li>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        </li>
    `;
    productList.innerHTML += productHTML;
});

// Add event listeners to products
productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const productId = e.target.parentNode.dataset.productId;
        const product = products.find((product) => product.id === parseInt(productId));
        addProductToCart(product);
    }
});

// Add product to cart
function addProductToCart(product) {
    const cartItemHTML = `
        <li>
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button>Remove</button>
        </li>
    `;
    cartItems.innerHTML += cartItemHTML;
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    // Implement checkout logic here
    alert('Checkout successful!');
});

// Track order
trackBtn.addEventListener('click', () => {
    // Implement track order logic here
    alert('Order tracked successfully!');
});

// Payment
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement payment logic here
    alert('Payment successful!');
});

payBtn.addEventListener('click', () => {
    paymentForm.submit();
});