function solve() {
  const camelText = document.getElementById("text").value;
  const convertion = document.getElementById("naming-convention").value;

  let arrSum = "";
  let splited = camelText.split(" ");

  splited.map(function (v, i) {
    if (convertion === "Camel Case") {
      if (i === 0) {
        return (arrSum += v.toLowerCase());
      }
      return (arrSum += v[0].toUpperCase() + v.substring(1).toLowerCase());

    } else if (convertion === "Pascal Case") {

      return (arrSum += v[0].toUpperCase() + v.substring(1).toLowerCase());
    } else {
      arrSum = "Error!";
    }
    console.log(arrSum);
  });

  document.getElementById("result").textContent = arrSum;
}
