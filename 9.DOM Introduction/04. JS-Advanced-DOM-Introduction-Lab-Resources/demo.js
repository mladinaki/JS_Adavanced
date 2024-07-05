// let arr = [1, 2, 5, 9];

// function solve(...input) {
//   function add(tottal, index) {
//     return tottal + index;
//   }
//   let sum = input.reduce(add);
//   console.log(sum);
// }
// solve("this is an example");

//   let sumArray = input.filter(function (a, b) {
//     return a % 2 === 0;
//   });
//   console.log(sumArray);
// }
// solve([1, 2, 3, 4, 5, 6]);

// function demo(input) {
//   input.forEach(function (value, i) {
//     console.log(`${[i]} -> ${value}`);

//   });
// }
// demo(["mladen", "todorov", "apple", "black"]);
// // demo([1, 2, 3, 4, 5, 6]);

// function add(input) {
//   let firstArr = input.map(function (value, index, array) {
//     return value.toUpperCase();
//   });
//   console.log(firstArr);
// }
// add(["mladen", "todorov", "apple", "black"]);

// let obj = {
//   name: "Sonic",
//   platform: "SEGA",
//   year: 1999,
// };

// let gameMap = new Map();
// gameMap.set("SEGA", "Sonic the Hedgehog5");
// gameMap.set("SNES", "Super Mario");
// gameMap.set("PS", "Spyro");

// for (const key of gameMap.keys()) {
//   console.log(key);
// }

// console.log("________________");

// for (const key of gameMap.values()) {
//   console.log(key);
// }

// console.log("________________");

// for (const [k, v] of gameMap.entries()) {
//   console.log(`${k} => ${v}`);
// }

// function demo(...input) {
//   const greating = () => {
//     for (let i = 0; i < input.length; i++) {
//       let res = input[i];

//       for (const el of res) {
//         console.log(el);
//       }
//     }
//   };
//   greating();
// }

// demo([1, 2, 3]);

// function solution() {
//   let str = "";

//   return {
//     append: (s) => (str += s),
//     removeStart: (n) => (str = str.substring(n)),
//     removeEnd: (n) => (str = str.substring(0, str.length - n)),
//     print: () => console.log(str),
//   };
// }

// let firstZeroTest = solution();

// firstZeroTest.append("hello");
// firstZeroTest.append("again");
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4); 
// firstZeroTest.print();
