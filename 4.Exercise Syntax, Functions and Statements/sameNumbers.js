// function sameNumbers(input) {
//     let numStr = input.toString();
//     let firs = numStr[0];
//     let isSame = true;
//     let sum = 0;
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] !== firs) {
//             isSame = false
//         }
//         sum += Number(numStr[i])
//     }
//     console.log(isSame);
//     console.log(sum);
// }
// sameNumbers(2222222);
// sameNumbers(1234);


function solve(input) {

    let res = String(input).split('').map((el) => Number(el));
    let sum = res.filter((el) => el !== res[0]).length ? false : true
    let tottal = res.reduce((acc, num) => acc + num);
    console.log(sum);
    console.log(tottal);    
}

solve(2222222)

