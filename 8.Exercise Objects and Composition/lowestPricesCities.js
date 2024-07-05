function lowestPricesCities(input) {
  let resObj = {};
  for (const el of input) {
    let [town, product, price] = el.split("|");
    price = Number(price);

    if (resObj.hasOwnProperty(product)) {
      let currentPrice = resObj[product]["price"];

      if (currentPrice > price) {
        resObj[product] = { town, price };
      }
    } else {
      resObj[product] = { town, price };
    }
  }

  for (const [k,v] of Object.entries(resObj)) {
    
      console.log(`${k} -> ${v['price']} (${v.town})`);
  }
}
lowestPricesCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
