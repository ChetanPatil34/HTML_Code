// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Product 2", price: 29.99, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Product 3", price: 39.99, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Product 4", price: 49.99, image: "https://via.placeholder.com/200" }
];

const cart = [];

// Load products dynamically into the page
const productContainer = document.getElementById('product-container');
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productElement);
});

// Add product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Update cart item count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Show cart popup
document.getElementById('cart-button').addEventListener('click', () => {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    let total = 0;

    cart.forEach(product => {
        const item = document.createElement('p');
        item.innerText = `${product.name} - $${product.price.toFixed(2)}`;
        cartItems.appendChild(item);
        total += product.price;
    });

    document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)}`;
    document.getElementById('cart-popup').style.display = 'block';
});

// Close cart popup
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-popup').style.display = 'none';
});

// Checkout button event (for future functionality)
document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Checkout functionality coming soon!');
});
