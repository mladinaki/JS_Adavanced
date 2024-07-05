function positionElement(input) {

    let sum = ''
    for (let i = 0; i < input.length; i += 2) {
        let res = input[i];
        sum += ` ${res}`;
    }
    console.log(sum);
}
positionElement(['5', '10'])