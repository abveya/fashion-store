//navboxclick
function showSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'flex'
  }
  function hideSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'none'
  }
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.product').forEach(product => {
        const price = parseFloat(product.dataset.price);
        const quantity = parseInt(product.querySelector('.quantity').value);
        total += price * quantity;
    });
    document.getElementById('totalPrice').innerText = total.toFixed(2);
}
document.querySelectorAll('.product').forEach(product => {
    const decrementButton = product.querySelector('.decrement');
    const incrementButton = product.querySelector('.increment');
    const quantityInput = product.querySelector('.quantity');

    decrementButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
            updateTotal();
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
        updateTotal();
    });
});
