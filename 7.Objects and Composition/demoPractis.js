// // // let objCat = {};

// // // objCat.name = "Mladen";
// // // objCat.age = 40;
// // // objCat.color = "black";

// // // let otherCat = objCat;
// // // objCat.name = "Ivo";
// // // objCat.color = "yellow";
// // // console.log(objCat);

// // // let phoneBoock = {
// // //     "FirstName: Mladen Todorov": "396857463",
// // //     "FirstName: Ivo Georgiev": "7732392903",
// // // };
// // // let otherPhone = phoneBoock;
// // // otherPhone["Dido Ivanov:"] = '00000';

// // // for (const key in phoneBoock) {
// // //     console.log(`${key} -> ${phoneBoock[key]} `);
// // // }

// // // const key = Object.keys(otherPhone);
// // // console.log(key);

// // // Object.keys(phoneBoock).forEach((key) => {
// // //     console.log(`${key} === ${phoneBoock[key]}`);
// // // })

// // // //arr
// // // let arr = ["1", "2"];
// // // let res = arr;
// // // res[8] = "mladen";
// // // console.log(res);

// // //
// // function solve(a, b) {
// //     a = 5;
// //     b = 4;

// //     let res = a + b;
// //     return res
// // }

// // //
// let car = {
//     model: 'BMV',
//     year: 2007,
//     facelift: true,
//     honk: function () {
//         //Method with function expression!
//         console.log(`${this.model}`, 'Beeb beeb!');
//     },

//     honk2: () => {
//         //Method with arrow function!
//         console.log('Beeb!');
//     },

//     honk3() {
//         //Object method notation!
//         console.log('Beeb Mladinaki');
//     },

//     solve(a) {
//         console.log(a);
//     }
// }

// // //
// // function division(a, b) {
// //     return a + b
// // }

// // let objDemoName = {

// //     mladen: function (a, b) {
// //         return a + b
// //     },

// //     todor: (a, b) => a * b,
// //     res(a, b) {
// //         return a - b
// //     }
// // }

// car.honk();
// car.honk2();
// car.honk3();
// // car.solve();
// // console.log(objDemoName.mladen(10, 20));
// // console.log(objDemoName.res(100, 70));
// // console.log(objDemoName.todor(100, 70));
// // console.log(division(10, 10));

// // let objRussian = {
// //     model: 'Lada',
// //     year: 2006,

// //     cars: function () {
// //         console.log(`${this.model}`, 'Russian');
// //     }
// // }

// // let otherModel = objRussian;
// // otherModel.model = 'BMW'

// // objRussian.cars();
// // otherModel.cars();

// // //Composition
// // let student = {
// //     firstName: 'Mladen',
// //     lastName: 'Todorov',
// //     age: 20,
// //     location: { lat: 200, long: 300 }
// // }
// // console.log(student.location);

function demoCar(...input) {
  let car = {};

car.model = input
car.year = input
  
  Object.keys(car).forEach((el)=>{
    console.log(`${el}-> ${car[el]}`);
  })
}
demoCar("BMW", 2008, "black");
