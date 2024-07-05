function storeCatalogue(input) {
  let obj = {};

  for (const el of input) {
    let [product, price] = el.split(" : ");
    price = Number(price);
    obj[product] = price;
  }

  let sorted = Array.from(Object.entries(obj)).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  let prewius = "";
  for (const [k, v] of sorted) {
    let firts = k[0];

    if (firts !== prewius) {
      prewius = firts;
      console.log(prewius);
    }
    console.log(`${k}: ${v}`);
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
