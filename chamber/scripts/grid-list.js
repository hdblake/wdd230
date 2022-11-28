const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#directory");

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
	let card = document.querySelector(".section");
	let divImg = document.querySelector(".img");
	let h2 = document.createElement("h2");
	let image = document.createElement("img");
	let address = document.querySelector(".address");
	let phone = document.querySelector(".phone");
	let website = document.querySelector(".a");

	// Text content of the business card
	h2.innerHTML = `${business.name}`;
	card.appendChild(h2);

	image.setAttribute("src", business.image);
	image.setAttribute("alt", `Logo for ${business.name}`);
	divImg.appendChild(image);
	card.appendChild(divImg);

	let logo1 = document.querySelector(".kendall");
	logo1.setAttribute(
		"style",
		"width:300px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);

	let logo2 = document.querySelector(".fox-bend");
	logo2.setAttribute(
		"style",
		"width:205px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);
	logo2.setAttribute("loading", "lazy");

	let logo3 = document.querySelector(".fox-winery");
	logo3.setAttribute(
		"style",
		"width:75px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);
	logo3.setAttribute("loading", "lazy");

	let logo4 = document.querySelector(".donuts");
	logo4.setAttribute(
		"style",
		"width:75px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);
	logo4.setAttribute("loading", "lazy");

	let logo5 = document.querySelector(".venue");
	logo5.setAttribute(
		"style",
		"width:75px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);
	logo5.setAttribute("loading", "lazy");

	let logo6 = document.querySelector(".village-grind");
	logo6.setAttribute(
		"style",
		"width:105px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);
	logo5.setAttribute("loading", "lazy");

	let logo7 = document.querySelector(".popcorn");
	logo7.setAttribute(
		"style",
		"width:75px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);
	logo7.setAttribute("loading", "lazy");

	let logo8 = document.querySelector(".tap-house");
	logo8.setAttribute(
		"style",
		"width:75px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);
	logo8.setAttribute("loading", "lazy");

	let logo9 = document.querySelector(".cycling");
	logo9.setAttribute(
		"style",
		"width:160px; height:75px; width:95%; margin-bottom:-8px; margin:auto;"
	);
	logo9.setAttribute("loading", "lazy");

	address.innerHTML = `${business.address}`;
	phone.innerHTML = `${business.phone}`;
	website.innerHTML = `Visit Website`;
	website.setAttribute("href", business.website);

	// Appending content to the business card
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
