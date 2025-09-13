// Main JavaScript file
console.log('Mmwafrika Store loaded');

// Cart functionality
let cart = [];

// Function to update cart count in the navbar
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Function to add item to cart
function addToCart(productId, productName, price) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    // Update cart count
    updateCartCount();
    
    // Show confirmation message
    alert(`${productName} added to cart!`);
}

// Checkout functionality
function showCheckout() {
    // Hide product grid and show checkout form
    document.getElementById('product-grid').classList.add('hidden');
    document.getElementById('checkout-section').classList.remove('hidden');
}

function hideCheckout() {
    // Show product grid and hide checkout form
    document.getElementById('product-grid').classList.remove('hidden');
    document.getElementById('checkout-section').classList.add('hidden');
}

// Add event listeners to "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
    // Update cart count on page load
    updateCartCount();
    
    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            const productName = this.dataset.productName;
            const price = parseFloat(this.dataset.price);
            
            addToCart(productId, productName, price);
        });
    });
    
    // Add event listener to cart button to show checkout
    const cartButton = document.getElementById('cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', showCheckout);
    }
    
    // Add event listener to cancel checkout button
    const cancelCheckoutButton = document.getElementById('cancel-checkout');
    if (cancelCheckoutButton) {
        cancelCheckoutButton.addEventListener('click', hideCheckout);
    }
    
    // Add event listener to checkout form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, you would process the payment here
            alert('Order completed successfully!');
            // Reset cart
            cart = [];
            updateCartCount();
            // Hide checkout and show product grid
            hideCheckout();
        });
    }
});