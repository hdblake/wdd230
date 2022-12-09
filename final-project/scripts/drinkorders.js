const URL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function fetchFruitApi() {
  try {
    const response = await fetch(URL);
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

// function displayOrder() {

//   document.querySelector(".first").innerHTML = document.getElementById("fname").value;
//   document.querySelector(".last").innerHTML = document.getElementById("lname").value;
//   document.querySelector(".email").innerHTML = document.getElementById("email").value;
//   document.querySelector(".phone").innerHTML = document.getElementById("phone").value;
//   document.querySelector(".option1").innerHTML = document.getElementById("select1").value;
//   document.querySelector(".option2").innerHTML = document.getElementById("select2").value;
//   document.querySelector(".option3").innerHTML = document.getElementById("select3").value;
//   document.querySelector(".special").innerHTML = document.getElementById("request").value;
  
// }