function biggerHalf(input) {
    let res = input.sort((a, b) => a - b);
    let arr = input.length / 2
    console.log(res.slice(arr));
}
biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])