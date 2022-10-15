// Script for current date in Header
const headerDate = document.querySelector("#current-date");
const current = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  current
);
headerDate.innerHTML = `${fullDate}`;

// Script for hamburger menu button in small/medium css view
const mainNav = document.querySelector('.navigation');
function toggleMenu() {
  document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

window.onresize = () => {if (window.innerWidth > 991) mainNav.classList.remove('responsive')};

// Script for footer
const d = new Date();

let year = d.getFullYear();
document.querySelector("#current-year").innerHTML = year;

let dateModified = new Date(document.lastModified);
let date = dateModified.toLocaleString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'});
let time = dateModified.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
let full = `Last Updated: ${date} ${time}`;
document.querySelector("#last-update").innerHTML = full;