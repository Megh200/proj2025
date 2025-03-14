document.getElementById("orderBtn").addEventListener("click", function() {
    document.getElementById("orderForm").classList.remove("d-none");
});

document.getElementById("submitOrder").addEventListener("click", function() {
    let burgerQty = parseInt(document.getElementById("burgerQty").value) || 0;
    let pizzaQty = parseInt(document.getElementById("pizzaQty").value) || 0;
    let pastryQty = parseInt(document.getElementById("pastryQty").value) || 0;
    let panipuriQty = parseInt(document.getElementById("panipuriQty").value) || 0;

    let totalPrice = (burgerQty * 80) + (pizzaQty * 150) + (pastryQty * 50) + (panipuriQty * 30);

    if (totalPrice > 0) {
        alert(`Thank you for your order! Your total is ₹${totalPrice}.`);
        document.getElementById("orderForm").classList.add("d-none");
    } else {
        alert("Please select at least one item before submitting.");
    }
});
