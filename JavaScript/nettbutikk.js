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




document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});
