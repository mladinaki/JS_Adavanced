const { expect } = require('chai');
const library = require('./library');


describe("Tests …", function () {
    describe("TODO …", function () {

        it("TODO year", () => {
            expect(library.calcPriceOfBook('The litle price', 1980), 20).to.equal('Price of The litle price is 10.00');
            expect(library.calcPriceOfBook('The litle price', 1979), 10).to.equal('Price of The litle price is 10.00');
            expect(library.calcPriceOfBook('The litle price', 1970), 10).to.equal('Price of The litle price is 10.00');
        });
        it("TODO year", () => {
            expect(library.calcPriceOfBook('The litle price', 1981), 20).to.equal('Price of The litle price is 20.00')
        });

        it("Test for price", () => {
            expect(library.calcPriceOfBook('The litle price', 1991), 10).to.equal('Price of The litle price is 20.00')
            expect(library.calcPriceOfBook('The litle price', 2000), 20).to.equal('Price of The litle price is 20.00')
        });
        it("Test for calcPriceOfBook", () => {
            expect(() => library.calcPriceOfBook(20, 'a')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook()).to.throw('Invalid input');
        });

        it("Test for calcPriceOfBook", () => {
            expect(() => library.calcPriceOfBook(-100,'a','b')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(-100)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([-100])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1,1)).to.throw('Invalid input');
        });

        it("Test for calcPriceOfBook", () => {
            expect(() => library.calcPriceOfBook(100)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('1','1')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook()).to.throw('Invalid input');
        });
    });

    describe("Test for findBook", function () {
        it("Test for no books", () => {
            expect(() => library.findBook([])).to.throw('No books currently available')
            expect(() => library.findBook([],0)).to.throw('No books currently available')
        });

        it("Test for no books", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"]), "Test").to.equal("The book you are looking for is not here!")
            expect(library.findBook([""]), "Troy").to.equal("The book you are looking for is not here!")
        });

        it("Test for no books", () => {
            expect(library.findBook(["Troy", "Life Style"]), "").to.equal("The book you are looking for is not here!")
        });

        it("Test for The books", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"]), 1).to.equal("The book you are looking for is not here!")
        });

        it("TestFor We found", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto",10], 'Troy')).to.equal("We found the book you want.")
        });

        it("Test We found", () => {
            expect(library.findBook(["Troy", "Life Style",10], 'Troy')).to.equal("We found the book you want.")
        });
    });
    describe("Test for arrangeTheBooks  …", function () {
        it("Test for no books", () => {
            expect(() => library.arrangeTheBooks([-1])).to.throw('Invalid input')
            expect(() => library.arrangeTheBooks([{}])).to.throw('Invalid input')
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input')
        });
        it("Test for no books", () => {
            expect(() => library.arrangeTheBooks([1],'Test')).to.throw('Invalid input')
            expect(() => library.arrangeTheBooks(['1'])).to.throw('Invalid input')
            expect(() => library.arrangeTheBooks(['0'])).to.throw('Invalid input')
            expect(() => library.arrangeTheBooks([0])).to.throw('Invalid input')
        });

        it("Test for no books", () => {
            expect(library.arrangeTheBooks(10),1).to.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(10),1,1).to.equal('Great job, the books are arranged.')
        });

        it("Test for no books", () => {
            expect(library.arrangeTheBooks(20),10).to.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(10),10).to.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(5,8),40).to.equal("Great job, the books are arranged.")
        });

        it("Test for The books", () => {
            expect(library.arrangeTheBooks(20), 10).to.equal('Great job, the books are arranged.')
        });

        it("Test for The books", () => {
            expect(library.arrangeTheBooks(50),'Test').to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(100),-10).to.equal("Insufficient space, more shelves need to be purchased.")
        });

        it("Test for The books", () => {
            expect(library.arrangeTheBooks(1000)).to.equal('Insufficient space, more shelves need to be purchased.')
        });
    });
});
