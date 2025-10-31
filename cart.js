function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-msg">Your cart is currently empty.</p>`;
    totalEl.innerText = "";
    return;
  }

  let total = 0;
  container.innerHTML = "";

  cart.forEach(item => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="cart-item">
        <div class="cart-title">
          <img src="${item.image_url}" alt="${item.title}">
          <span>${item.title}</span>
        </div>
        <p>$${item.price.toFixed(2)}</p>
        <p>${item.quantity}</p>
      </div>
    `;
  });

  totalEl.innerText = "Total: $" + total.toFixed(2);
}

function clearCart() {
  localStorage.removeItem("cart");
  window.location.href = "catalogue.html";
}

document.getElementById("cancelBtn").addEventListener("click", clearCart);

loadCart();





/* positive/ Negative user interaction */
const payBtn = document.getElementById("payBtn");

payBtn.addEventListener("click", () => {
  payBtn.innerText = "Successful Payment!";
  payBtn.style.background = "green";
  payBtn.style.color = "white";
  payBtn.style.borderColor = "green";


  localStorage.removeItem("cart");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
