const { expect, assert } = require("chai");
const isOddOrEven = require("./evenOrOdd");

describe("Test for isOddOrEven ", () => {
  it(" Test isOddOrEven to be u ndefined", () => {
    assert.equal(isOddOrEven([])),undefined;
  });
  it("Test isOddOrEven for even", () => {
    assert.equal(isOddOrEven([{}])),true;
  });
  it("Test isOddOrEven for even", () => {
    assert.equal(isOddOrEven(['mladen'])),true;
  });

  it("Test isOddOrEven for odd", () => {
    assert.equal(isOddOrEven(["mladins"]));
  });

  it("Test isOddOrEven for odd", () => {
    assert.equal(isOddOrEven("ivan"),'even');
  });
  it("Test isOddOrEven for odd", () => {
    assert.equal(isOddOrEven({ name: "mladine" }));
  });
  it("Test isOddOrEven for even", () => {
    assert.equal(isOddOrEven("dido"), "even");
  });
  it("Test isOddOrEven for even", () => {
    assert.equal(isOddOrEven("mladi"), "odd");
  });
  it("Test isOddOrEven for odd", () => {
    assert.equal(isOddOrEven({})), undefined;
  });
  it("Test isOddOrEven for odd", () => {
    assert.equal(isOddOrEven(1)),(undefined);
  });
  it("Test isOddOrEven for odd", () => {
    assert.equal(isOddOrEven());
  });
});
