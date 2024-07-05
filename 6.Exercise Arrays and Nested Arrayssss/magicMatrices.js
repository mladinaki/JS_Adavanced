function magicMatrices(input) {
    let isFile;
    for (let i = 0; i < input.length - 1; i++) {
        let sum = input[i].reduce((acc, current) => acc + current);
        let res = input[i + 1].reduce((acc, current) => acc + current);

        if (sum === res) {
            return true;
        } else {
            return false;
        }
    }
    return isFile 
}
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
