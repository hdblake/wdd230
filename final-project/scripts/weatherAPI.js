let currentTemp = document.createElement("p");
let conditions = document.createElement("p");
let humidity = document.createElement("p");
let forecast = document.createElement("div");
let currentHigh = document.createElement("p");
let dayTwoHigh = document.createElement("p");
let dayThreeHigh = document.createElement("p");
let card = document.querySelector(".weather-card");
let display = document.querySelector(".weather");

const URL =
	"https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=3&appid=97ce60e6d0bc0ca722b497935512500d&units=imperial";

async function fetchAPI() {
	try {
		const response = await fetch(URL);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			displayWeather(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

fetchAPI();

function displayWeather(weatherData) {
	currentTemp.innerHTML = `Current Temp: ${weatherData.list[0].main.temp.toFixed(0)}°F`;
	card.appendChild(currentTemp);

	let currentCondition = weatherData.list[0].weather[0].description;
	currentCondition = currentCondition.toLowerCase().split(" ")
	.map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join(" ");

	conditions.innerHTML = `${currentCondition}`;
	card.appendChild(conditions);

	humidity.innerHTML = `Humidity: ${weatherData.list[0].main.humidity}%`;
	card.appendChild(humidity);

	let dayTwoCondition = weatherData.list[1].weather[0].description;
	dayTwoCondition = dayTwoCondition.toLowerCase().split(" ")
	.map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join(" ");

	let dayThreeCondition = weatherData.list[2].weather[0].description;
	dayThreeCondition = dayThreeCondition.toLowerCase().split(" ")
	.map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join(" ");

	currentHigh.innerHTML = `Day 1 High (Today): ${weatherData.list[0].main.temp_max.toFixed(0)}°F`;
	dayTwoHigh.innerHTML = `Day 2 High: ${weatherData.list[1].main.temp_max.toFixed(0)}°F and ${dayTwoCondition}`;
	dayThreeHigh.innerHTML = `Day 3 High: ${weatherData.list[2].main.temp_max.toFixed(0)}°F and ${dayThreeCondition}`;
	forecast.appendChild(currentHigh);
	forecast.appendChild(dayTwoHigh);
	forecast.appendChild(dayThreeHigh);
	card.appendChild(forecast);

	display.appendChild(card);
}