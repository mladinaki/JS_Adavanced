function solve() {
  const sections = document.getElementsByTagName("section")[1];
  const section2 = document.getElementsByTagName("section")[2];
  const section3 = document.getElementsByTagName("section")[3];

  const task = document.getElementById("task");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  const btnAdd = document.getElementById("add");

  btnAdd.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    const taskInp = task.value;
    const descInp = description.value;
    const dateInp = date.value;

    if (task.value == "" || description.value == "" || date.value == "") {
      return;
    }

    task.value = "";
    description.value = "";
    date.value = "";

    addArticle(taskInp, descInp, dateInp);
  }

  //Add article//
  function addArticle(taskInp, descInp, dateInp) {
    
    const article = create("article");

    const h3 = create("h3", taskInp);
    const paragrafDesc = create("p", `Description: ${descInp}`);
    const paragrafDate = create("p", `Due Date: ${dateInp}`);

    const classFlex = create("div", undefined, "flex");
    const btnGreen = create("button", "Start", "green");
    const btnRed = create("button", "Delete", "red");

    article.appendChild(h3);
    article.appendChild(paragrafDesc);
    article.appendChild(paragrafDate);
    article.appendChild(classFlex);

    classFlex.appendChild(btnGreen);
    classFlex.appendChild(btnRed);

    sections.children[1].appendChild(article);

    btnRed.addEventListener("click", () => {
      article.remove();
    });

    btnGreen.addEventListener("click", (el) => {
      section2.children[1].appendChild(article);
      
      const btnFinish = create("button", "Finish", "orange");
      btnGreen.remove();
      classFlex.appendChild(btnFinish);

      btnFinish.addEventListener("click", () => {
        section3.children[1].appendChild(article);
        classFlex.remove();
      });
    });
  }

  //Create Tag//
  function create(tag, content, className) {
    const el = document.createElement(tag);

    if (content) {
      el.textContent = content;
    }

    if (className) {
      el.className = className;
    }
    return el;
  }
}
