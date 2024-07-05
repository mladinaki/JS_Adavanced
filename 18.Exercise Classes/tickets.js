function ticked(input, criteria) {
  class Ticked {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  const res = [];
  for (const el of input) {
    let [destination, price, status] = el.split("|");
    price = Number(price);
    const data = new Ticked(destination, price, status);
    res.push(data);
  }

  switch (criteria) {
    case "destination":
      res.sort((a, b) => a.destination.localeCompare(b.destination));
      break;

    case "status":
      res.sort((a, b) => a.status.localeCompare(b.status));
      break;

    case "price":
      res.sort((a, b) => a.price - b.price);
      break;
  }
  return res;
}
console.log(
  ticked(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
// co   nsole.log(sum);
