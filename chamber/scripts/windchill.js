let temp = document.querySelector(".temp").innerHTML;
let windSpeed = document.querySelector(".speed").innerHTML;
let windChill = document.querySelector(".chill");

// Determines if wind chill displays temperature or not
if (temp <= 50 && windSpeed > 3) {
  let chill =
    35.74 +
    0.6215 * temp -
    35.75 * windSpeed ** 0.16 +
    0.4275 * temp * windSpeed ** 0.16;

  windChill.innerHTML = `${Math.round(chill)} &#8457;`;
} else {
  chill = "N/A";

  windChill.innerHTML = `${chill}`;
}