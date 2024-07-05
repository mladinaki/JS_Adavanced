const { expect } = require("chai");
const isSymmetric = require("./summeryChech");

describe("Test for Summery checher", () => {
  it("Test for isSymmetric", () => {
    expect(isSymmetric([1, 2, 3, 4,2,1])).to.equal(false);
    expect(isSymmetric(['1',1])).to.equal(false);
  });

  it("Test return false for isSymmetric", () => {
    expect(isSymmetric([true])).to.equal(true);
  });

  it("Test return false", () => {
    expect(isSymmetric([-1, -2, 1])).to.be.false;
    expect(isSymmetric([3])).to.be.true;
  });

  it("Test return false", () => {
    expect(isSymmetric({})).to.be.false;
  });
  it("Test return false", () => {
    expect(isSymmetric(["1", "array", 3])).to.be.false;
  });
  it("Test return false", () => {
    expect(isSymmetric([5, "hi", { a: 5 }, "hi", 5])).to.be.true;
  });
});
