const cards = document.querySelector(".cards")
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

// Fetches data from JSON file and parses it to JS object
fetch("json/data.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject);
		const businesses = jsonObject["businesses"];
		businesses.forEach(displayBusiness);
	});

function displayBusiness(business) {

  // Creates the card for the business
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
	let logo = document.createElement("img");
	let address = document.createElement("p");
	let phone = document.createElement("p");
	let website = document.createElement("a");

  // Text content of the business card
  h2.textContent = `${business.name}`;
  logo.setAttribute("src", business.image);
  logo.setAttribute("alt", `Logo for ${business.name}`);
  logo.setAttribute("loading", "lazy");
  address.textContent = `${business.address}`;
  phone.textContent = `${business.phone}`;
  website.textContent = `Visit Website`;
  website.setAttribute("href", business.website);

  // Appending content to the business card
  card.appendChild(h2);
  card.appendChild(logo);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  // Appeding the card and all its children back to the article
  display.appendChild(card);
}

// Displays grid view
gridButton.addEventListener("click", () => {
  display.classList.add("directory-grid");
  display.classList.remove("directory-list");
});

// Displays list view
listButton.addEventListener("click", () => {
  display.classList.add("directory-list");
  display.classList.remove("directory-grid");
});