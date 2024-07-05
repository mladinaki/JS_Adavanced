const { expect } = require('chai');
const { calcPriceOfFlowers } = require('./flowerShop');
const flowerShop = require('./flowerShop');

describe("Tests …", function () {
    describe("TODO …", function () {

        it("Test for calcPriceOfFlowers Invalid input", () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, '1')).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1, 1)).to.throw('Invalid input!');
        });
        it("Test for calcPriceOfFlowers ", () => {
            expect( flowerShop.calcPriceOfFlowers('cc', 1, 1)).to.equal('You need $1.00 to buy cc!');
            expect(flowerShop.calcPriceOfFlowers('cc', 2, 1)).to.equal('You need $2.00 to buy cc!');
            expect(flowerShop.calcPriceOfFlowers('cc', 2, 3)).to.equal('You need $6.00 to buy cc!');
        });

        it("Test for checkFlowersAvailable", () => {
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'b', 'c'])).to.equal('The a are available!');
            expect(flowerShop.checkFlowersAvailable('a', 'b', 'c', ['a', 'b', 'c'])).to.equal('The a are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable(1, ['a', 'b', 'c'])).to.equal('The 1 are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable(5, ['a', 'b', 'c'])).to.equal('The 5 are sold! You need to purchase more!');
        });

        it("Test sellFlowers", () => {
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 0)).to.equal('b / c');
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 1)).to.equal('a / c');
        });

        it("Test sellFlowers", () => {
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 0)).to.equal('b / c');
            expect(flowerShop.sellFlowers(['b', 'c'], 0)).to.equal('c');
        });

        it("Test sellFlowers Throw Invalid ", () => {
            expect(() => flowerShop.sellFlowers(['a', 'b', 'c'])).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['a', 'b', '1'])).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['a', 'b'])).to.throw('Invalid input!');
        });
    });
});
