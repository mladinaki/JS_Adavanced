class Calculate {
  constructor(sting, num) {
    this.innerString = sting;
    this.num = num;
    this.arr = [];
  }
  callc() {
    this.arr.push(this.num, this.innerString);
    return this.arr;
  }
  increas() {
    if (this.arr.length) {
      return this.arrr;
    }
  }
  toString() {
    return this.arr; 
  }
}

const res = new Calculate("Test", 5);
console.log(res.callc());

res.increas();
console.log(res.toString());
