// function negativePositive(input) {
//     let arr = []
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] < 0) {
//             arr.unshift(input[i])
//         } else {

//             arr.push(input[i])
//         }
//     }
//     console.log(arr.join('\n'));
// }
// negativePositive([3, -2, 0, -1])

function negativePositive(arr) {

    let arrs = [];
    let num = 1

    arr.forEach(element => {

        element === 'add' ? arrs.push(num): arrs.pop();
        num++
    });
    return console.log(arr.element === 0 ?'Empty' : arrs.join('\n')); 
}
negativePositive(['add', 'add', 'remove', 'add', 'add'])


