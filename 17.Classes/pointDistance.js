// class Point {
//   constructor(x, y, name) {
//     this.x = x;
//     this.y = y;
//     this.name = name;
//   }
//   static distance(p1, p2) {
//     let dx = p1.x - p2.x;
//     let dx1 = p1.y - p2.y;
//     return Math.sqrt(dx ** 2 + dx1 ** 2);
//   }
// }
// let p1 = new Point(5, 5, "Mladinaki");
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));

// p1.sayHello();0

class Claculate {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get diameter() {
    return this.a * this.b;
  }
  set diameter(value) {
    this.b = value / 6;
  }
  get area() {
    return this.a * 2;
  }
}
const res = new Claculate(4, 4);
// const re2 = new Claculate(4,8);
console.log(res.diameter);
console.log(res.area);
// console.log(re2.diameter);
