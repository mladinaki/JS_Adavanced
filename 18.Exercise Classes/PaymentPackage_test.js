const { expect } = require("chai");
const PaymentPackage = require("./paymentPackage");
const { name } = require("./paymentPackage");

describe("Test", () => {
    it("name", () => {
        let instance = new PaymentPackage("Name", 100);
        expect(instance.name, "name").to.equal("Name");
    });
    it("value", () => {
        let instance = new PaymentPackage("Name", 100);
        expect(instance.value, 100).to.equal(100);
        expect(() => { instance.value = -1 }).to.throw('Value must be a non-negative number');
        expect(() => { instance.value = '1' }).to.throw('Value must be a non-negative number');
    });

    it("VAT", () => {
        let instance = new PaymentPackage("Name", 100);
        expect(() => { instance.VAT = -1 }).to.throw('VAT must be a non-negative number');
        expect(() => { instance.VAT = '1' }).to.throw('VAT must be a non-negative number');
    });

    it("active", () => {
        let instance = new PaymentPackage("Name", 100);
        expect(instance.active, false)
    });
    it("toString", () => {
        let instance = new PaymentPackage("Name", 100);
        expect(instance.toString(), false)
        expect(instance.toString(), true)
        expect(instance.toString(), -1)
        expect(instance.toString(), "-1")
    });
});
