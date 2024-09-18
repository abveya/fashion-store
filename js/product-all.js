
document.addEventListener('DOMContentLoaded', () => {
    let priceElement = document.getElementsByClassName('price')[0];
    let priceValue = priceElement.getAttribute('price');
    
    const quantityInput = document.getElementById('quantityInput');
    const totalPriceSpan = document.getElementById('totalPrice');

    const updateTotalPrice = () => {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = priceValue * quantity;
        totalPriceSpan.textContent = totalPrice.toFixed(2);
    };

    document.querySelector('.increment').addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotalPrice();
    });

    document.querySelector('.decrement').addEventListener('click', () => {
        const currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
            updateTotalPrice();
        }
    });
});
