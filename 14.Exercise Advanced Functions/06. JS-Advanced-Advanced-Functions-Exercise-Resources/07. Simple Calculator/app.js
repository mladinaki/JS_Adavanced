function calculator() {
  let num1;
  let num2;
  let output;

  let obj = {
    init: (selector1, selector2, resultSelector) => {
      num1 = document.querySelector(selector1);
      num2 = document.querySelector(selector2);
      output = document.querySelector(resultSelector);
    },
    add: () => (output.value = +num1.value + +num2.value),
    subtract: () => (output.value = +num1.value - +num2.value),
  };
  return obj;
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
