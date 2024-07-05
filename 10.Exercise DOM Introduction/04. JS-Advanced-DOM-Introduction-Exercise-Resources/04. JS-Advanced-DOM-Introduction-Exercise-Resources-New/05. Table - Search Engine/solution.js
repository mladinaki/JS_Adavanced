function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchField = document.getElementById("searchField").value;
    const searchRow = document.querySelectorAll("tbody tr");
    if (searchField === null || searchRow === null) {
      return;
    }
    let count = 0;

    Array.from(searchRow).find(function (v) {
      const row = v.textContent;

      if (searchField === "") {
        return;
      }

      if (row.includes(searchField)) {
        v.classList.add("select");
        count++;
      } else {
        v.classList.remove("select");
        v.style.fontWeight = "";
      }
      document.getElementById("result").textContent = count;
    });
  }
}

