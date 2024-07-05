const { expect } = require('chai');
const weddingDay = require('./weddingDay');

describe("Tests …", () => {
    describe("Test for PickVenue", () => {
        it("Test for PickVenue Invalid Information!", () => {
            expect(() => weddingDay.pickVenue('a', 'b', 'c', 1)).to.throw('Invalid Information!')
            expect(() => weddingDay.pickVenue('Plovdiv'), 1, 10).to.throw('Invalid Information!')
            expect(() => weddingDay.pickVenue(150, 120)).to.throw("Invalid Information!")
        });
        it("Test for PickVenue throw", () => {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(`This venue meets the requirements, with capacity of 150 guests and 120$ cover.`)
            expect(weddingDay.pickVenue(140, 130, 'Varna')).to.equal("This venue does not meet your requirements!")
            expect(() => weddingDay.pickVenue(140, 130, 'Pleven')).to.throw(`The location of this venue is not in the correct area!`)
        })
    });

    describe("Test for otherSpendings ", () => {
        it("Test for otherSpendings ", () => {
            expect(() => weddingDay.otherSpendings(1, 0, -1)).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings()).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings('Varna', -1)).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings('Varna', 0)).to.throw("Invalid Information!")

        });

        it("Test for otherSpendings ", () => {
            expect(() => weddingDay.otherSpendings(-500)).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings('a', 'b', 500)).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings(false)).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings(['a'])).to.throw("Invalid Information!")
        })
    });

    describe("Test for tableDistribution  ", () => {
        it("Test for tableDistribution  ", () => {
            expect(() => weddingDay.tableDistribution('a', 'b', 500)).to.throw("Invalid Information!")
            expect(() => weddingDay.tableDistribution()).to.throw("Invalid Information!")
            expect(() => weddingDay.tableDistribution([])).to.throw("Invalid Information!")
            expect(() => weddingDay.tableDistribution(-1, 0, 2)).to.throw("Invalid Information!")
            expect(() => weddingDay.tableDistribution('Varna')).to.throw("Invalid Information!")

        });
        it("Test for tableDistribution  ", () => {
            expect(weddingDay.tableDistribution(5, 2)).to.equal("There is only 3 people on every table, you can join some tables.")
            expect(weddingDay.tableDistribution(10, 1)).to.equal("You have 1 tables with 10 guests on table.")
            expect(weddingDay.tableDistribution(8, 1)).to.equal("You have 1 tables with 8 guests on table.")
        })
    });
});
