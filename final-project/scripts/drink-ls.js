// Locallly store number of drinks ordered
let drinkDisplay = document.querySelector(".total-orders");
let drinksOrdered = Number(window.localStorage.getItem("drinks-ls"));

if (drinksOrdered !== 0) {
  drinkDisplay.innerHTML = `Drinks Ordered: ${drinksOrdered}`;
} else {
  drinkDisplay.innerHTML = `Drinks Ordered: `;
}

// Increment number of drink orders
drinksOrdered++;

// Store number of drinks ordered
localStorage.setItem("drinks-ls", drinksOrdered);