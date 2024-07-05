function autoEngineeringCompany(input) {
  const obj = {};

  for (const el of input) {
    let [brand, model, price] = el.split(" | ");
    price = Number(price);
    if (!obj.hasOwnProperty(brand)) {
      obj[brand] = [];
      obj[brand].push({ model, price });

    } else if (obj[brand].find((x) => x.model === model)) {
      let res = obj[brand].find((x) => x.model === model);
      res.price += price;
    } else {
      obj[brand].push({ model, price });
    }
  }

  for (const [k, v] of Object.entries(obj)) {
    console.log(`${k}`);
    for (const el of Object.values(v)) {
      console.log(`###${el.model} -> ${el.price}`);
    }
  }
  // console.log(obj);
}
autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
