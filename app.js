var purchasePrice = document.querySelector("#purchase-price");
var stockQuantity = document.querySelector("#stock-quanity");
var currentPrice = document.querySelector("#current-price");
var form = document.querySelector("#form");
var output = document.querySelector("#output");
var image = document.querySelector(".image");

function checkHandler(){
  
  image.style.display="none";  //added for edge case where user doesn't enter all values after he has entered all values and seen the result once
  document.body.classList.remove("sadTheme"); //added because else the sad theme will persist
  var purchasedAt = Number(purchasePrice.value);
  var quantity = Number(stockQuantity.value);
  var currPrice = Number(currentPrice.value);
 
  console.log(purchasedAt);
  if( !(purchasePrice.value==="") && !(stockQuantity.value==="") && !(currentPrice.value==="")){
    if(purchasedAt<0 || quantity <0 || currPrice<0){
      output.innerHTML = "Please enter a valid value";
      return 0;
    }
    calculateStock(purchasedAt,quantity,currPrice);
  }

  else{
    output.innerHTML = "Please enter all the values";
  }

}

function calculateStock(purchasedAt,quantity,currPrice) {
  
  var difference = (currPrice - purchasedAt) * quantity;
  var earnings = ((currPrice - purchasedAt) / purchasedAt) * 100;
  earnings = Math.abs(earnings).toFixed(2);
  image.style.display="block"; //to undo style="none" 
  image.style.opacity ="1.0";  // to undo opacity=0.0 
 

  if (difference > 0) {
    output.innerHTML = `You gained ${earnings}% Your total profit 
                        is Rs.${difference}` + "🎉";
    image.src="./img/krabsmoney.gif";
    

  }
  if (difference < 0) {
    output.innerHTML = `You lost ${earnings}% Your total loss 
                        is Rs.${Math.abs(difference)}` + "😔";
        if(earnings>50){
          document.body.classList.add("sadTheme");
        }
    image.src ="./img/spongbobsad.gif"
  }

  if(difference===0) {
    output.innerHTML = "There was no loss or profit!😶"
    image.src="./img/nothing.gif";
  }
}
form.addEventListener("submit", checkHandler);