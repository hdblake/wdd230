const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const URL =
	"https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=97ce60e6d0bc0ca722b497935512500d&units=imperial";

async function apiFetch() {
	try {
		const response = await fetch(URL);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

apiFetch();

function displayResults(weatherData) {
	currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
		0
	)}</strong>`;

	const iconSource = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
	let desc = weatherData.weather[0].description;
	desc = desc
		.toLowerCase()
		.split(" ")
		.map((a) => a.charAt(0).toUpperCase() + a.substring(1))
		.join(" ");

	weatherIcon.setAttribute("src", iconSource);
	weatherIcon.setAttribute("alt", desc);

	captionDesc.textContent = desc;
}
