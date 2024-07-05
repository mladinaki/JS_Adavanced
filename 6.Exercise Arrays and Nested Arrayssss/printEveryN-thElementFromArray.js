function printEveryNthElementFromArray(input, arg) {
    let res = input.filter((a, b) => b % arg === 0);
    return res
}
printEveryNthElementFromArray(['5', '20', '31', '4', '20'], 2)

