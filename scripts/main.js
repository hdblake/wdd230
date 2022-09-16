const d = new Date();

let year = d.getFullYear();
document.querySelector("#current-year").innerHTML = year;

let dateModified = new Date(document.lastModified);
document.querySelector("#last-update").innerHTML = dateModified;
