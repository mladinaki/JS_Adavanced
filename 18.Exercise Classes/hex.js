class Hex {
  constructor(number) {
    this.value = Number(number);
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return `0X${this.value.toString(16).toLocaleUpperCase()}`;
  }
  plus(number) {
    let res = this.value + Number(number.valueOf());
    return new Hex(res);

  }
  minus(number) {
    let res = this.value + Number(number.valueOf());
    return new Hex(res);
  }
  parse(string) {
    parseInt(string, 16)
  }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
