function rotateArr(arr, num) {
    let array = []
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
rotateArr(["1", "2", "3", "4"], 2);
//3 4 1 2//
rotateArr(["Banana", "Orange", "Coconut", "Apple"], 15);
//Orange Coconut Apple Banana//
