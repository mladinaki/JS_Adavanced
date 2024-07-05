function fruti(...input) {
    let sum;
    let res;
    let fruti;

    for (let i = 0; i < input.length; i++) {
        sum = input[1] / 1000;
        res = sum * input[2];
        fruti = input[0];
    }
    console.log(`I need $${res.toFixed(2)} to buy ${sum.toFixed(2)} kilograms ${fruti}.`);
}
fruti('orange', 2500, 1.80);