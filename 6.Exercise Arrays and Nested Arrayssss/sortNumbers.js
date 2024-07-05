function sortNum(input) {
    let arr = []
    let res = input.slice().sort((a, b) => a - b);
    input = input.sort((a, b) => a - b)

    for (let i = 0; i < input.length / 2; i++) {
        arr.push(res.shift());
        arr.push(res.pop());

    }
    if (arr.length !== input.length) {
        arr.pop();
    }
    return arr
}
sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]//