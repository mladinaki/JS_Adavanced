function fibonacci() {
  let coutn = 0;
  let coutn1 = 1;

  return function () {
    const res = coutn + coutn1;
    coutn = coutn1;
    coutn1 = res;
    return coutn;
  };
}

const funcStr = fibonacci();
console.log(funcStr());
console.log(funcStr());
console.log(funcStr());
console.log(funcStr());
