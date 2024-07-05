// function generateReport() {
//   const tableBody = document.querySelectorAll("tbody tr");
//   const tablethead = document.querySelectorAll("thead tr th");

//   let arr = [];

// //   Array.from(tableBody).forEach(function (v, i) {
// //     const rowData = v.cells;
// //     const obj = {};
// //     for (let i = 0; i < rowData.length; i++) {
// //       const row2 = tablethead[i].childNodes;

// //       if (row2[1].checked === true) {
// //         obj[row2[0].textContent] = rowData[i].textContent;
// //       }
// //     }
// //     arr.push(obj);
// //   });
// //   const parse = JSON.stringify(arr);
// //   document.getElementById("output").textContent = parse;
// // }

function generateReport() {
  const tableBody = document.querySelectorAll("tbody tr");
  const tablethead = document.querySelectorAll("thead tr th");
  const arr = [];
  for (let i = 0; i < tableBody.length; i++) {
    let row = tableBody[i].cells;

    const obj = {};
    
    for (let i = 0; i < row.length; i++) {
      let row2 = tablethead[i].childNodes;

      if (row2[1].checked === true) {
        obj[row2[0].textContent] = tablethead[i].textContent;
      }
    }
    arr.push(obj);
    console.log(arr);
  }
}
