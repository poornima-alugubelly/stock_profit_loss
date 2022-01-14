let purchasePrice = document.querySelector("#purchase-price");
let stockQuantity = document.querySelector("#stock-quanity");
const currentPrice = document.querySelector("#current-price");
const form = document.querySelector("#form");
const output = document.querySelector("#output");

function checkHandler() {
  document.body.classList.remove("sadTheme"); //added because else the sad theme will persist
  const purchasedAt = Number(purchasePrice.value);
  const quantity = Number(stockQuantity.value);
  const currPrice = Number(currentPrice.value);

  if (
    !(purchasePrice.value === "") &&
    !(stockQuantity.value === "") &&
    !(currentPrice.value === "")
  ) {
    if (purchasedAt < 0 || quantity < 0 || currPrice < 0) {
      output.innerText = "Please enter a valid value";
      return 0;
    }
    calculateStock(purchasedAt, quantity, currPrice);
  } else {
    output.innerText = "Please enter all the values";
  }
}

function calculateStock(purchasedAt, quantity, currPrice) {
  const difference = (currPrice - purchasedAt) * quantity;
  let earnings = ((currPrice - purchasedAt) / purchasedAt) * 100;
  earnings = Math.abs(earnings).toFixed(2);

  if (difference > 0) {
    output.innerHTML = `<div class="output-txt"> You gained ${earnings}% Your total profit 
                        is Rs.${difference} 🎉 </div>
                        <img id="image" src="./img/krabsmoney.gif">`;
  } else if (difference < 0) {
    output.innerHTML = `<div class="output-txt"> You lost ${earnings}% Your total loss 
    is Rs.${Math.abs(difference)} 😔 </div>
    <img id="image" src="./img/spongbobsad.gif">`;

    if (earnings > 50) {
      document.body.classList.add("sadTheme");
    }
  } else {
    output.innerHTML = `<div class="output-txt"> There was no loss or profit!😶</div>
    <img id="image" src="./img/nothing.gif">`;
  }
}
form.addEventListener("submit", checkHandler);
