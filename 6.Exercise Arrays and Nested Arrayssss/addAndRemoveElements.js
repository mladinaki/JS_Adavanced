// function addAndRemoveElements(input) {
//     let arr = [];
//     let res = 1

//     input.forEach(el => {
//         el === 'add' ? arr.push(res) : arr.pop();
//         res++
//     });
//     let sum = arr.length === 0 ? 'Empty' : arr.join('\n');
//     console.log(sum);
// }
// addAndRemoveElements(["add", "add", "add", "add"]);
// //1, 2; 3; 4; //
// addAndRemoveElements(["add", "add", "remove", "add", "add"]);
// //1, 4; 5; //



function addAndRemoveElements(input) {
    let arr = [];
    let res = 1;

    for (let i = 0; i < input.length; i++) {
        let str = input[i];

        if (str === 'add') {
            arr.push(res);
            res++;

        } else {
            arr.pop();
            res++;
        }
    }
    if (arr === 'remove' || arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}
addAndRemoveElements(["add", "add", "add", "add"]);
//1, 2; 3; 4; //
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
//1, 4; 5; //
addAndRemoveElements(['remove', 'remove', 'remove']);
