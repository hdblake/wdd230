const d = new Date();

let year = d.getFullYear();
document.querySelector("#current-year").innerHTML = year;

let dateModified = new Date(document.lastModified);
let date = dateModified.toLocaleString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'});
let time = dateModified.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
let fullDate = `Last Updated: ${date} ${time}`;
document.querySelector("#last-update").innerHTML = fullDate;