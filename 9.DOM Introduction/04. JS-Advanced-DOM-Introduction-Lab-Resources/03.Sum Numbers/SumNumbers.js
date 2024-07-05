// function calc() {
//   const nums1 = document.getElementById("num1");
//   const nums2 = document.getElementById("num2");
//   const sum = document.getElementById("sum");

//   const num1Input = nums1.value;
//   const num2Input = nums2.value;
//   const res = Number(num1Input) + Number(num2Input);
//   sum.value = res;
// }

function calc() {
  const nums1 = document.querySelectorAll("input");
  const sum = document.getElementById("sum");

  for (let i = 0; i < nums1.length; i++) {
    sum.value = Number(nums1[0].value) + Number(nums1[1].value);
  }
}
