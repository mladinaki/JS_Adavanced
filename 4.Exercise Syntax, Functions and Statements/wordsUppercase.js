function wordsUppercase(input) {
    let res = input.match(/[A-z0-9]+/g).join(', ').toUpperCase();
    console.log(res);
}
wordsUppercase('Hi, how are you?'); 