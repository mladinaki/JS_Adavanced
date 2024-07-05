// function solve() {
//   const add = document.getElementsByClassName("shopping-cart")[0];
//   const textarea = document.getElementsByTagName("textarea")[0];

//   let arr = [];
//   let tottal = 0;

//   let isFile = false;

//   add.addEventListener("click", onAdd);

//   function onAdd(e) {
//     if (e.target.nodeName !== "BUTTON") {
//       return;
//     }

//     if (isFile) {
//       return;
//     }
//     let btn = e.target;

//     if (Array.from(btn.classList).indexOf("add-product") >= 0) {
//       const resArr = e.target.parentElement.parentElement;

//       const title = resArr.querySelectorAll(".product-title")[0].textContent;
//       const price = resArr.querySelectorAll(".product-line-price")[0]
//         .textContent;

//       textarea.textContent += `Added ${title} for ${price} to the cart.\n`;
//       if (arr.indexOf(title) < 0) {
//         arr.push(title);
//       }
//       tottal += Number(price);
//     } else if (Array.from(btn.classList).indexOf("checkout") >= 0) {
//       const list = arr.join(", ");
//       isFile = true;
//       textarea.textContent += `You bought ${list} for ${tottal.toFixed(2)}.`;
//     }
//   }
// }
