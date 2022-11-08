const requestURL =
	"https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

const cards = document.querySelector(".cards");

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject);
		const prophets = jsonObject["prophets"];
		prophets.forEach(displayProphets);
	});

function displayProphets(prophet) {
	let card = document.createElement("section");
	let h2 = document.createElement("h2");
	let portrait = document.createElement("img");

	h2.textContent = prophet.name + " " + prophet.lastname;

	card.setAttribute("src", prophet.imageurl);
	h2.setAttribute("alt", "Portait of " + prophet.name + " " + prophet.lastname);
	portrait.setAttribute("loading", "lazy");

	card.appendChild(h2);
	card.appendChild(portrait);

	document.querySelector("div.cards").appendChild(card);
}
