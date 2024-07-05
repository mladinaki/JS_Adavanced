function addItem() {
  const newItemText = document.getElementById("newItemText");
  const items = document.getElementById("items");

  if (newItemText.value === "") {
    return;
  }

  let space = newItemText.value;
  newItemText.value = "";

  const li = create("li");
  const delBtn = create("a", "[Delete]", "#");

  li.textContent = space;
  
  li.appendChild(delBtn);
  items.appendChild(li);
  items.appendChild(delBtn);
  delBtn.addEventListener("click", onDelete);

  function onDelete(e) {
    e.target.parentElement.remove();
  }

  function create(tag, content, href, className) {
    const el = document.createElement(tag);

    if (content) {
      el.textContent = content;
    }
    if (href) {
      el.href = href;
    }
    return el;
  }
}
