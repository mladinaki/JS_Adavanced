function largeNum(...input) {
    let arr = [];
    arr.push(...input);
    console.log(`The largest number is ${Math.max(...arr)}.`);
}
largeNum(-3, -5, -22.5)
