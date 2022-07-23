import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {

    test("should be able to add a donut and retrive the total count", () => {
        const underTest = new DonutMaker(0);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoClicker with 100 donuts ", () => {
        const underTest = new DonutMaker(100, 0);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(1);
    });

    test("should NOT be able to buy an autoClicker with >100 donuts ", () => {
        const underTest = new DonutMaker(90, 0);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(90);
        expect(underTest.numAutoClickers).toEqual(0);
    });

    test("should increase the cost of an autoClicker by 10%", () => {
        const underTest = new DonutMaker(100, 0);
        underTest.addAutoClicker();
        underTest.increaseAutoClickerCost();
        expect(underTest.autoClickerCost).toEqual(110);
    });


});













