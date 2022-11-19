let icon = document.querySelector(".icon");
let currentTemp = document.querySelector(".temp");
let windSpeed = document.querySelector(".speed");
let windChill = document.querySelector(".chill");
let coverage = document.querySelector(".coverage");

const URL = 
  "https://api.openweathermap.org/data/2.5/weather?lat=41.6828&lon=-88.3515&appid=97ce60e6d0bc0ca722b497935512500d&units=imperial";

async function fetchURL() {
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

fetchURL();

function displayWeather(weatherData) {
  const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  let desc = weatherData.weather[0].description;
	desc = desc
		.toLowerCase()
		.split(" ")
		.map((a) => a.charAt(0).toUpperCase() + a.substring(1))
		.join(" ");

  icon.setAttribute("src", iconSrc);
  icon.setAttribute("alt", desc);

  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}&#8457;`;
  coverage.innerHTML = desc;
  windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;
  windChill.innerHTML = `${weatherData.main.feels_like.toFixed(0)}&#8457;`;
}
