function addItem() {
  const items = document.getElementById("items");
  const newItemTextInput = document.getElementById("newItemText");

  const newInput = newItemTextInput.value;

  const liText = document.createElement("li");
  liText.textContent = newInput;
  items.appendChild(liText);
}
