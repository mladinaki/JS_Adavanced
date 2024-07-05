const { expect, assert } = require("chai");
const mathEnforcer = require("./mathEnforcer");
const { addFive, subtractTen, sum } = require("./mathEnforcer");

describe("Test for mathEnaaforcer ", () => {
  describe("Test for single parameter ", () => {
    it(" Test addFive correct for number of string", () => {
      expect(mathEnforcer.addFive("5")).to.be.undefined;
      expect(mathEnforcer.addFive(-5)).to.equal(0);
    });
    it("Test addFive correct for number of string", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it("Test addFive correct for number of string", () => {
      expect(mathEnforcer.addFive(0.99)).to.equal(+5.99);
    });
    it("Test addFive correct for number of string", () => {
      expect(mathEnforcer.addFive(3.14)).to.equal(8.14);
    });
  });

  describe("Test for subtractTen ", () => {
    it(" Test subtractTen correct for number of string", () => {
      assert.equal(mathEnforcer.subtractTen(), undefined);
      assert.equal(mathEnforcer.subtractTen([]), undefined);
      assert.equal(mathEnforcer.subtractTen([{ name: "pesho" }]), undefined);
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
      expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.subtractTen(0.99)).to.equal(-9.01);
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.subtractTen(10.99,1.99)).to.equal(+0.9900000000000002);
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.subtractTen(10.99)).to.equal(+0.9900000000000002,10);
    });
  });
  describe("Test for sum ", () => {
    it(" Test subtractTen correct for number of string", () => {
      expect(mathEnforcer.sum(undefined)).to.be.undefined;
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.sum(5, "ax")).to.be.undefined;
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.sum(3.12, 3.12)).to.equal(6.24);
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.sum(10, 10)).to.equal(20);
    });

    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.sum()).to.undefined;
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.sum([])).to.undefined;
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.sum(['a'])).to.undefined;
    });
    it("Test lookupChar correct for number of string", () => {
      expect(mathEnforcer.sum('a')).to.undefined;
    });
  });
});
