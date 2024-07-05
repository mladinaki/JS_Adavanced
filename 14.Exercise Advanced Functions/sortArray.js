function sortedArray(input, str) {
  if (str === "asc") {
    input.sort((a, b) => a - b);
  } else {
    input.sort((a, b) => b - a);
  }

  return input;
}
sortedArray([14, 7, 17, 6, 8], "asc");
