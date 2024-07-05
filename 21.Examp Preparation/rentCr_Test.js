const { expect } = require("chai");
const rentCar = require("./rentCar");
const { model, searchCar, calculatePriceOfCar } = require("./rentCar");

describe("Tests rentCar", function () {
    describe("TODO …", function () {
        it("Test from model and catalog …",  ()=> {
            const shop = ["a", "b", "c"];
            const model = "a";
            const res = searchCar(shop, model);
            expect(res).to.equal("There is 1 car of model a in the catalog!");
        });

        it("Test Invalid input …", function () {
            const shop = ["a", "b", "a"];
            const model = "a";
            const res = searchCar(shop, model);

            expect(res).to.equal("There is 2 car of model a in the catalog!");
        });

        it("Test searchCar", function () {
            expect(() => rentCar.searchCar(["a", "b", "c"], "d")).to.throw("There are no such models in the catalog!");
        });
        it("Test Invalid input", function () {
            expect(() => rentCar.searchCar([1, 'a', 'b'],5)).to.throw("Invalid input!");
        });
        it("Test Invalid input", function () {
            expect(() => rentCar.searchCar([1, 'abC'])).to.throw("Invalid input!");
        });
        it("Test Invalid input", function () {
            expect(() => rentCar.searchCar([1])).to.throw("Invalid input!");
        });

        describe("Tests calculatePriceOfCar", function () {
            it("Test Invalid input", function () {
                expect(() => rentCar.calculatePriceOfCar("Volkswagen", '1')).to.throw("Invalid input!");
            });

            it("Test Invalid input for calculatePriceOfCar", function () {
                expect(rentCar.calculatePriceOfCar('Volkswagen', 20),).to.equal(`You choose Volkswagen and it will cost $400!`);
            });

            it("Test Invalid input", function () {
                expect(() => rentCar.calculatePriceOfCar('a', 1)).to.throw('No such model in the catalog!');
            });
            it("Test Invalid input", function () {
                expect(() => rentCar.calculatePriceOfCar('1', 1)).to.throw('No such model in the catalog!');
            });
        });
        describe("Tests checkBudget", function () {
            it("Test Invalid input", function () {
                expect(() => rentCar.checkBudget(1, 1)).to.throw("Invalid input!");
            });
            it("Test Invalid input", function () {
                expect(() => rentCar.checkBudget(1, 'a', 1)).to.throw("Invalid input!");
            });
            it("Test Invalid input", function () {
                expect(() => rentCar.checkBudget([''])).to.throw("Invalid input!");
                expect(() => rentCar.checkBudget({})).to.throw("Invalid input!");
            });
            it("Test Invalid input", function () {

                expect(() => rentCar.checkBudget('a', 'b', 'c')).to.throw("Invalid input!");
            });

            it("Test Invalid input", function () {
                expect(() => rentCar.checkBudget('1', 1, 1)).to.Throw(`Invalid input!`);
            });

            it("Test Invalid input", function () {
                expect(() => rentCar.calculatePriceOfCar(1, '1', 1, 1)).to.throw('Invalid input!');
            });
            it("Test Invalid input", function () {

                const res = rentCar.checkBudget(10, 3, 35)
                expect(res).to.equal('You rent a car!');
            });
            it("Test input", function () {

                const res = rentCar.checkBudget(1, 3, 1)
                expect(res).to.equal('You need a bigger budget!');
            });
        });
    });
});
