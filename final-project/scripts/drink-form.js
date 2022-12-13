const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function fetchFruitApi() {
  try {
    const response = await fetch(requestURL);
    if (response.ok) {
      const data = await response.json();
      displayFruits(data);
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchFruitApi();

function displayFruits(content) {

  // Get queries of 3 select elements from html
  let select1 = document.querySelector("#select1");
  let select2 = document.querySelector("#select2");
  let select3 = document.querySelector("#select3");

  // Loop through Object and add each fruit name to 3 <select> elements
  for (let i = 0; i < content.length; i++) {
    let option1 = document.createElement("option");
    option1.textContent = content[i].name;
    option1.value = content[i].name;
    select1.add(option1);

    let option2 = document.createElement("option");
    option2.textContent = content[i].name;
    option2.value = content[i].name;
    select2.add(option2);

    let option3 = document.createElement("option");
    option3.textContent = content[i].name;
    option3.value = content[i].name;
    select3.add(option3);
  }
}

// displayOrder should SUM carbs, protein, fat, sugar, and calories for drink based upon 3 selections

let button = document.getElementById("submit");

button.addEventListener('click', displayOrder);

function displayOrder(event) {

  event.preventDefault();

  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let fruit1 = document.getElementById("select1").value;
  let fruit2 = document.getElementById("select2").value;
  let fruit3 = document.getElementById("select3").value;
  let request = document.getElementById("special").value;
  let output = document.querySelector("#output");
  const date = new Date();

  // Variable for modified date format
  let dateFormat = date.toLocaleString("en-US", {
    month: "2-digit", day: "2-digit", year: "numeric"
  });


  output.innerHTML = `<p>Order Submitted! Details:<br>
  First Name: ${name}<br>
  Email: ${email}<br>
  Phone Number: ${phone}<br>
  Fruit Selections: ${fruit1}, ${fruit2}, ${fruit3}<br>
  Request: ${request}<br>
  Date: ${dateFormat}</p>`;
  
}