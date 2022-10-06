const headerDate = document.querySelector("#current-date");

const current = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  current
);

headerDate.innerHTML = `${fullDate}`;
