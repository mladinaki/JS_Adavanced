function colorize() {
  let table = document.querySelectorAll("table tr");
  let index = 0;
  for (let i = 0; i < table.length; i++) {
    index++
    if (index % 2 === 0) {
      table[i].style.background = "Teal";
    }
  }
}
