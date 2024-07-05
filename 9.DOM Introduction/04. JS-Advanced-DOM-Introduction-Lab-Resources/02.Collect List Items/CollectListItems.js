function extractText(item) {
  const items = document.querySelectorAll("ul#items li");

  const res = document.getElementById("result");

  for (const el of items) {
    res.value += el.textContent + "\n";
  }
}
