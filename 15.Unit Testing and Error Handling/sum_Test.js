const { expect } = require("chai");
const sum = require("./sumOfNumbers");

describe("Tes of Sum of numbers", () => {
  it("Sum", () => {
    expect(sum([1, 2, 3])).to.be.equal(6);
    expect(sum([1, 2, 3, 4])).to.be.equal(10);
    expect(sum([])).to.be.equal(0);
  });
  it("Sum Invalid array", () => {
    let invalidArr = "Invalid Array";
    let res = sum(invalidArr);
    expect(res).to.be.NaN;
  });

  it("Calcullate corect result", () => {
    let arr = [1, true, 2];
    let res = sum(arr);
    expect(res).to.equal(4);
  });
});
