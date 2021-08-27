var purchasePrice = document.querySelector("#purchase-price");
var stockQuantity = document.querySelector("#stock-quanity");
var currentPrice = document.querySelector("#current-price");
var form = document.querySelector("#form");
var output = document.querySelector("#output");

function checkHandler() {
	document.body.classList.remove("sadTheme"); //added because else the sad theme will persist
	var purchasedAt = Number(purchasePrice.value);
	var quantity = Number(stockQuantity.value);
	var currPrice = Number(currentPrice.value);

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
	var difference = (currPrice - purchasedAt) * quantity;
	var earnings = ((currPrice - purchasedAt) / purchasedAt) * 100;
	earnings = Math.abs(earnings).toFixed(2);

	if (difference > 0) {
		output.innerHTML = `<div class="output-txt"> You gained ${earnings}% Your total profit 
                        is Rs.${difference} 🎉 </div>
                        <img id="image" src="./img/krabsmoney.gif">`;
	}
	if (difference < 0) {
		output.innerHTML = `<div class="output-txt"> You lost ${earnings}% Your total loss 
    is Rs.${Math.abs(difference)} 😔 </div>
    <img id="image" src="./img/spongbobsad.gif">`;

		if (earnings > 50) {
			document.body.classList.add("sadTheme");
		}
	}

	if (difference === 0) {
		output.innerHTML = `<div class="output-txt"> There was no loss or profit!😶</div>
    <img id="image" src="./img/nothing.gif">`;
	}
}
form.addEventListener("submit", checkHandler);
