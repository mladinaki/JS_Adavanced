function solve() {
  const input = document.getElementById("input").value;

  let text = input.split(".").filter((x) => x.length > 0);
  console.log(text);

  for (let i = 0; i < text.length; i += 3) {
    const arr = [];

    for (let j = 0; j < 3; j++) {
      if (text[i + j]) {
        arr.push(text[i + j]);
      }
    }
    let res = arr.join(". ") + ".";
    let output = (document.getElementById(
      "output"
    ).innerHTML += `<p>${res}</p>`);
    output.innerHTML = "";
  }
}
