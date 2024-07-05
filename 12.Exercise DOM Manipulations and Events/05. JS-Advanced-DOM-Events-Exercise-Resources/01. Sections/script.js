function create(words) {
  const content = document.getElementById("content");
  console.log(content);

  for (const el of words) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = el;
    p.style.display = "none";
    div.appendChild(p);
    content.appendChild(div);

    div.addEventListener("click", onSelect);

    function onSelect(e) {
      e.target.appendChild(p);
      p.style.display = "block";
    }
  }
}
