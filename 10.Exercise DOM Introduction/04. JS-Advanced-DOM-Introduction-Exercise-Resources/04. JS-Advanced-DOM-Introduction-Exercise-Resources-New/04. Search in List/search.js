// function search() {
//   const towns = document.querySelectorAll("ul li");
//   const input = document.getElementById("searchText").value;
//   let count = 0;
//   for (const el of towns) {
//     let res = el.textContent;

//     if (res.includes(input)) {
//       el.style.textDecoration = "underline";
//       el.style.fontWeight = "bold";
//       count++;
//     } else {
//       el.style.textDecoration = "none";
//       el.style.fontWeight = "";
//     }
//   }
// }

// function search() {
//   const towns = Array.from(document.querySelectorAll("ul li"));
//   const input = document.getElementById("searchText").value;
//   let count = 0;
//   towns.forEach((el) => {
//     let res = el.textContent;

//     if (res.includes(input)) {
//       el.style.textDecoration = "underline";
//       el.style.fontWeight = "bold";
//       count++;
//     } else {
//       el.style.textDecoration = "none";
//       el.style.fontWeight = "";
//     }

//     console.log(res);

//     document.getElementById("result").textContent = count;
//   });

// }

function search() {
  const towns = document.querySelectorAll("tbpdy tr");
  const input = document.getElementById("searchText").value;
let count = 0
  Array.from(towns).find(function (value) {
    let a = value.textContent;
    if (a.includes(input)) {
      value.style.textDecoration = "underline";
      value.style.fontWeight = "bold";
      count++;
    } else {
      value.style.textDecoration = "none";
      value.style.fontWeight = "";
      
    }
    document.getElementById("result").textContent = `${caches} matches found`;
  });
}
