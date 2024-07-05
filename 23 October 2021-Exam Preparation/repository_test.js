const { expect } = require("chai");
const Repository = require("./repository");

describe("Repository", function () {
    describe("Test of repo", function () {

        let properties = {
            name: "string",
            age: "number",
            birthday: "object",
        };
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7),
        };

        it("Test for props", () => {
            let repo = new Repository(properties);

            expect(repo).to.have.property("props");
            expect(typeof repo.props).to.equal("object");
        });

        it("Test for data", () => {
            let repo = new Repository(properties);

            expect(repo).to.have.property("data");
            expect(typeof repo.props).to.equal("object");
            expect(repo.data).instanceOf(Map);
        });

        it("Test of add entiti", () => {
            let repo = new Repository(properties);

            expect(repo.add(entity)).to.equal(0);
            expect(repo.add(entity)).to.equal(1);
            expect(repo.add(entity)).to.equal(2);
        });

        it('Test error entity', () => {
            let entity = {
                name: "Pesho",
                age: 22,
            };

            let entity1 = {
                age: 22,
                birthday: new Date(1998, 0, 7),
            };

            let entity2 = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7),
            };

            let repo = new Repository(properties);

            expect(() => repo.add(entity)).to.throw(`Property birthday is missing from the entity!`);
            expect(() => repo.add(entity1)).to.throw(`Property name is missing from the entity!`);
            expect(() => repo.add(entity2)).to.throw(`Property age is missing from the entity!`);
        })

        it("Test for get …", () => {
            let repo = new Repository(properties);

            expect(repo.data.get(entity)).to.equal(undefined);
        });

        describe("Test number of entries", function () {
            it("Get count …", () => {

                let entity = {
                    name: "Pesho",
                    age: 22,
                    birthday: new Date(1998, 0, 7),
                };

                let repo = new Repository({});

                expect(repo.count).to.equal(0);
                expect(repo.count).to.equal(undefined);
            });
        });
    });
});
