function solve(e) {
  const moviesId = document.querySelector("ul");
  const archive = document.querySelector("#archive ul");
  document.querySelector("button").addEventListener("click", onScreen);

  let [name, hall, ticketPrice] = document.querySelectorAll("#container input");

  function onScreen(e) {
    e.preventDefault();

    const namesInp = name.value;
    const hallInp = hall.value;
    const ticketInp = Number(ticketPrice.value);

    if (
      name.value === "" ||
      hall.value === "" ||
      isNaN(Number(ticketPrice.value) === "") ||
      Number(ticketPrice.value) === 0 ||
      isNaN(Number(ticketPrice.value))
    ) {
      return;
    }

    name.value = "";
    hall.value = "";
    ticketPrice.value = "";

    movies(namesInp, hallInp, ticketInp);
  }

  function movies(namesInp, hallInp, ticketInp) {
    const li = create("li");
    const span = create("span", `${namesInp}`);
    const strong = create("strong", `Hall: ${hallInp}`);

    li.appendChild(span);
    li.appendChild(strong);
    moviesId.appendChild(li);

    const div = create("div");
    const strong2 = create("strong", `${ticketInp.toFixed(2)}`);
    const input = create("input");
    input.placeholder = "Tickets Sold";
    const button = create("button", "Archive");
    button.addEventListener("click", onArhive);

    div.appendChild(strong2);
    div.appendChild(input);
    div.appendChild(button);
    li.appendChild(div);
    moviesId.appendChild(li);
  }

  function onArhive(e) {
    // debugger;
    let sum = 0;
    const element = e.target.parentElement;
    const elPrice = Number(element.querySelectorAll("strong")[0].textContent);
    const inputs = Number(element.querySelectorAll("div input")[0].value);
    const spanEl =
      e.target.parentElement.parentElement.querySelector("span").textContent;
    const section = document.querySelectorAll("button", "section")[2];
    sum = Number(elPrice) * Number(inputs);
    const tottal = sum.toFixed(2);

    if (!isNaN(Number(sum)) && Number(sum) > 0 && elPrice !== "") {
      const li = create("li");
      const span = create("span", `${spanEl}`);
      const newStrong = create("strong", `Total amount: ${tottal}`);
      const buttons = create("button", "Delete");

      li.appendChild(span);
      li.appendChild(newStrong);
      li.appendChild(buttons);
      archive.appendChild(li);
      console.log(archive);

      e.target.parentElement.parentElement.remove();
      buttons.addEventListener("click", onDelete);
      section.addEventListener("click", onClear);
    }
  }

  function onDelete(e) {
    // debugger
    const del = e.target.parentElement;
    del.remove();
  }

  function onClear(e) {
    // debugger;

    const end = e.target.previousElementSibling;
    end.remove();
  }

  function create(tag, content, placeholder) {
    const el = document.createElement(tag);

    if (content) {
      el.textContent = content;
    }
    if (placeholder) {
      el.textContent = placeholder;
    }
    return el;
  }
}
