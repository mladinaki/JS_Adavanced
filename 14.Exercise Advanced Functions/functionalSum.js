// function add(n1) {
//   let sum = n1;

//   function add1(n2) {
//     sum = n1 += n2;
//     return add1;
//   }
//   add1.toString = function () {
//     return sum;
//   };
//   return add1;
// }
// console.log(+add(1));
// console.log(+add(1)(6)(-3));

function solve(num) {
  let sum = 0;

  function add(number) {
    sum += number;
    return add;
  }
  add.toString = function(){
    return sum
  }
  return add(num)
}

console.log(+solve(1)(2)(3));
