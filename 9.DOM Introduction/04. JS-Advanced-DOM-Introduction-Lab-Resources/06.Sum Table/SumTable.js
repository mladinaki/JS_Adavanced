function sumTable() {
  let tbody = document.querySelectorAll("tbody tr");
  let tottal = 0;
  for (let i = 1; i < tbody.length; i++) {
    let numRes = tbody[i].children;

    let row = numRes[numRes.length - 1].textContent;
    tottal += Number(row);
    console.log(tottal);
  }
  document.getElementById("sum").textContent = tottal;
}
