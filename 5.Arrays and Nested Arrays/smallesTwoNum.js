function smallesTwoNum(input) {
    const res = input.sort((a, b) => a - b);
    console.log(res);
    console.log(res.splice(0, 2));
}
smallesTwoNum([30, 15, 50, 5])
smallesTwoNum([3, 0, 10, 4, 7, 3])