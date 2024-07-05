function stringLength(...input) {
    let sum = '';
    let arr = []
    let tottal;
    let sum2;

    for (let i = 0; i < input.length; i++) {
        let res = input[i];
        sum = res.length;

        arr.push(sum)
        tottal = arr.reduce((acc, current) => acc + current);
        sum2 = Math.floor(tottal / 3);
    }
    console.log(tottal);
    console.log(sum2);
}
stringLength('pasta', '5', '22.3')