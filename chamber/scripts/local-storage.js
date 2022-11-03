const displayVisits = document.querySelector('.visits');

let numberOfVisits = Number(window.localStorage.getItem('visits-ls'))

if (numberOfVisits !== 0) {
  displayVisits.textContent = numberOfVisits;
} else {
  displayVisits.textContent = `None`;
}

numberOfVisits++;

localStorage.setItem('visits-ls', numberOfVisits);