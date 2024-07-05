function juiceFlavors(arr) {
  const map = new Map();
  //   const obj = {};
  arr.reduce((acc, curr) => {
    let [flavor, count] = curr.split(" => ");
    count = Number(count)

    if (!acc.hasOwnProperty(flavor)) {
      acc[flavor] = 0;
    }
    acc[flavor] += count;

    if (acc[flavor] > 1000) {
      if (!map.has(flavor)) {
        map.set(flavor, 0);
      }
      map.set(flavor, map.get(flavor) + parseInt(acc[flavor] / 1000));
      acc[flavor] %= 1000;
    }
    return acc;
  }, {});

  for (const [flavor, count] of map) {
    console.log(`${flavor} => ${count}`);
  }
}
juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
