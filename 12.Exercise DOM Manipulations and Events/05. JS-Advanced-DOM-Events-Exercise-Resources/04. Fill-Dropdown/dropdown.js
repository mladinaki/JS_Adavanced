function addItem(e) {
  const newItemText = document.querySelector("#newItemText");
  const newItemValue = document.querySelector("#newItemValue");
  const menu = document.getElementById("menu");

  const option = document.createElement("option");
  option.value = newItemValue.value;
  option.textContent = `${newItemText.value}`;
  menu.appendChild(option);
}
