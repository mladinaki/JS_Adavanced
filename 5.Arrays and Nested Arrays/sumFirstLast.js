function sumFirstLast(input) {
    let sum = 0;
    let firs = Number(input[0]);
    let res = Number(input[input.length - 1]);

    sum = firs + res
    console.log(sum);
}
sumFirstLast(['20', '30', '40'])
