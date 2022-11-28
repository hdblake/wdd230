const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#cards");

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
	let image = document.createElement("img");
	let address = document.createElement("p");
	let phone = document.createElement("p");
	let website = document.createElement("a");

	// Appends JSON Bussiness name
	h2.innerHTML = `${business.name}`;
	card.appendChild(h2);

	// Appends JSON image
	image.setAttribute("src", business.image);
	image.setAttribute("alt", `Logo for ${business.name}`);
	image.setAttribute("loading", "lazy");
	card.appendChild(image);


	// Adds JSON address, phone, and website
	address.innerHTML = `${business.address}`;
	phone.innerHTML = `${business.phone}`;
	website.innerHTML = `Visit Website`;
	website.setAttribute("href", business.website);

	// Appending content to the business card
	card.appendChild(address);
	card.appendChild(phone);
	card.appendChild(website);

	// Appends all content back to cards
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
