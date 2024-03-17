document.addEventListener("DOMContentLoaded", function () {
    let cartItems = [];
    let cartTotal = 0;

    function addToCart(productName, price) {
        cartItems.push(productName);
        cartTotal += price;

        updateCart();
    }

    function updateCart() {
        const cartList = document.getElementById('cart-items');
        const totalDisplay = document.getElementById('cart-total');

        cartList.innerHTML = '';
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartList.appendChild(li);
        });

        totalDisplay.textContent = cartTotal;
    }

    window.addToCart = addToCart;
});


