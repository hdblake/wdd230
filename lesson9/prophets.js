const requestURL =
	"https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

const cards = document.querySelector(".cards");

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const prophets = jsonObject["prophets"];
		prophets.forEach(displayProphets);
	});

function displayProphets(prophet) {
	let card = document.createElement("section");
	let h2 = document.createElement("h2");
	let birth = document.createElement("p");
	let state = document.createElement("p");
	let portrait = document.createElement("img");

	h2.textContent = `${prophet.name} ${prophet.lastname}`;
	birth.textContent = `Date of birth: ${prophet.birthdate}`;
	state.textContent = `Place of birth: ${prophet.birthplace}`;

	portrait.setAttribute("src", prophet.imageurl);
	portrait.setAttribute(
		"alt",
		`Portait of ${prophet.name} ${prophet.lastname} ${prophet.order} Latter-Day President`
	);
	portrait.setAttribute("loading", "lazy");

	card.appendChild(h2);
	card.appendChild(birth);
	card.appendChild(state);
	card.appendChild(portrait);

	document.querySelector("div.cards").appendChild(card);
}