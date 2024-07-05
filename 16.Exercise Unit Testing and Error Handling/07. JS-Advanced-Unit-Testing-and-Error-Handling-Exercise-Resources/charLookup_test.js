const { assert, expect } = require("chai");
const lookupChar = require("./charLookup");

describe("Test for lookupChar ", () => {
  it(" Test lookupChar correct for number of string", () => {
    expect(lookupChar(["mladinaki"])).to.equal(undefined);
    expect(lookupChar(undefined)).to.be.undefined;
  });
  it("Test lookupChar correct for number of string", () => {
    assert.equal(lookupChar("pesho", "gosho")), undefined;
  });
  it("Test lookupChar correct for number of string", () => {
    assert.equal(lookupChar("pesho", "gosho",-1)), undefined;
  });
  it("Test lookupChar correct for number of string", () => {
    assert.equal(lookupChar("pesho", 0.9)), undefined;
  });
  it("Test lookupChar correct for number of string", () => {
    assert.equal(lookupChar([], 0.9)), undefined;
  });
  it("Test lookupChar", () => {
    assert.equal(lookupChar("pesho", 5.5), undefined);
  });
  it("Test lookupChar", () => {
    assert.equal(lookupChar("pesho", 5), "Incorrect index");
  });
  it("Test lookupChar", () => {
    assert.equal(lookupChar("pesho", -5), "Incorrect index");
  });
});
describe("Test for lookupChar ", () => {
  it(" Test lookupChar", () => {
    assert.equal(lookupChar(["mladinaki"], "o"));
    assert.equal(lookupChar(["mladinaki"], "G"));
  });
  it(" Test lookupChar", () => {
    assert.equal(lookupChar(["mladinaki"], 1));
    assert.equal(lookupChar(["mladinaki"], -1));
  });
  it(" Test lookupChar", () => {
    assert.equal(lookupChar(["mladinaki"], 1));
    assert.equal(lookupChar("mladinaki",2),'a');
  });
});
