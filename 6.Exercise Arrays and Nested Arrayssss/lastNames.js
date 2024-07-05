function listOfNames(input) {
    let res = input.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < res.length; i++) {
        console.log(`${i + 1}.${input[i]}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
//Bob ,Christina ,Ema , John//