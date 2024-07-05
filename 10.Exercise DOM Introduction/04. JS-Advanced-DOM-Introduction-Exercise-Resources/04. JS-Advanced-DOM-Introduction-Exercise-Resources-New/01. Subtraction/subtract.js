function subtract() {
  const numInpur = document.querySelectorAll("input");
  let tottal = 0;

  for (let i = 0; i < numInpur.length; i++) {
    let res = numInpur[0].value;
    let res1 = numInpur[1].value;
    tottal = res - res1;
  }
  document.getElementById("result").textContent = tottal;
}
