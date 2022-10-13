const input = document.querySelector("input");
const button = document.querySelector("button");
const chapter = document.querySelector("ul");

button.addEventListener("click", function () {
  const item = input.value;
  input.value = " ";

  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");

  listItem.innerHTML = item;
  deleteButton.innerHTML = "❌";
  listItem.appendChild(deleteButton);
  chapter.appendChild(listItem);

  deleteButton.addEventListener("click", function () {
    chapter.removeChild(listItem);
  });

  input.focus();
});
