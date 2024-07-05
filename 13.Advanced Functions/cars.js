// function cars(command) {
//   let obj = {};

//   const res = (function () {
//     return {
//       create: (car, inherits, car2) =>(obj[car] = inherits ? Object.create(obj[car2]) : {}),

//       set: (b, c, d) => (obj[b][c] = d),

//       print: (n) => {

//         const arr = [];
//         for (const el in obj[n]) {
//           arr.push(`${el}:${obj[n][el]}`);
//         }

//         console.log(arr.join(","));
//       },
//     };
//   })();
//   command.forEach((el) => {
//     let [a, b, c, d] = el.split(" ");
//     res[a](b, c, d);
//   });
// }
// cars([
//   "create c1",
//   "create c2 inherit c1",
//   "set c1 color red",
//   "set c2 model new",
//   "print c1",
//   "print c2",
// ]);
function cars(command) {
  const obj = {};

  const res = {
    create: (car, inherits, car2) =>
      (obj[car] = inherits ? Object.create(obj[car2]) : {}),

    set: (b, c, d) => (obj[b][c] = d),

    print: (n) => {
      const arr = [];
      for (const key in obj[n]) {
        arr.push(`${key}:${obj[n][key]}`);
      }
      console.log(arr);
    },
  };

  command.forEach((x) => {
    const [a, b, c, d] = x.split(" ");
    res[a](b, c, d);
  });
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
