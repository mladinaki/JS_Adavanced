function deleteByEmail() {
  const tbody = document.querySelectorAll("tbody tr");
  const input = document.querySelector("input").value;
  let found = false;

  const res = Array.from(tbody).find(function (v, i) {
    const row = v.textContent;
    if (row.includes(input)) {
      v.remove();
      found = true;
    }
  });

  const resFound = document.getElementById("result");
  resFound.textContent = found ? "Deleted." : "Not found.";
}
