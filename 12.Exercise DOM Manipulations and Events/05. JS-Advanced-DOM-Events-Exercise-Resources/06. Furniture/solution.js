function solve() {
  const btnBuy = document.querySelectorAll("button");
  btnBuy[1].addEventListener("click", onBuy);
  btnBuy[0].addEventListener("click", generate);


  function generate() {
    let area = {};
    area['textArea'] = JSON.parse(document.querySelectorAll("textArea")[0].value);
    let tableBody = document.getElementsByTagName("tbody")[0];
    let table = document.querySelector("thead");

    for (const el of area['textArea']) {
      const tr = table.insertRow(table.length);
      const t1 = tr.insertCell(0);
      const t2 = tr.insertCell(1);
      const t3 = tr.insertCell(2);
      const t4 = tr.insertCell(3);
      const t5 = tr.insertCell(4);

      t1.innerHTML = `<img src="${el.img}">`;
      t2.innerHTML = `${el.name}`;
      t3.innerHTML = `${el.price}`;
      t4.innerHTML = `${el.decFactor}`;
      t5.innerHTML = `<td><input type="checkbox"/></td>`;
      tableBody.appendChild(tr);
    }
  }

  function onBuy() {
    const area = document.querySelectorAll("textarea")[1];
    let tableBody = document.querySelectorAll("tbody tr");
    let arr = [];

    for (const el of tableBody) {
      if (el.querySelector("input[type=checkbox]:checked")) {
        const data = el.querySelectorAll("td");
        let obj = {
          name: data[1].textContent,
          price: data[2].textContent,
          decFactor: data[3].textContent,
        };

        arr.push(obj);
      }
    }
    let names = "";
    let tottal = 0;
    let decFactor = 0;
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      let elments = i == el.length - 1 ? "" : ", ";
      names += el.name + elments,
        tottal += Number(el.price);
      decFactor += Number(el.decFactor);
    }
    decFactor /= arr.length;
    area.value = `Bought furniture: ${names}\nTotal price: ${tottal.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
  }
}
