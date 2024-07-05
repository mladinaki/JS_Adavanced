// function extractIncreasingSubsequenceArray(input) {
//     let arr = [];
//     let lineBig = input.shift();
//     arr.push(lineBig)

//     for (const el of input) {
//         if (el >= lineBig) {
//             arr.push(el)
//             lineBig = el
//         }
//     }
//     console.log(arr);
// }
// extractIncreasingSubsequenceArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//[1, 3, 8, 10, 12, 24]//

function extractIncreasingSubsequenceArray(input) {
    let arr = [];
    let bigger = input.shift();
    arr.push(bigger);

    input.forEach(element => {
        if (element >= bigger) {
            arr.push(element);
            bigger = element
        }
    });
   return arr
}
extractIncreasingSubsequenceArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);



