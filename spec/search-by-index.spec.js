describe("Searching by index", () => {
    it("should return -1 if element does not exist", () => {
        let ls = ["some"];
        let index = ls.indexOf('elem');
        expect(index).toBe(-1);
    });

    it("should return first index if ther is multiple coincidences", () => {
        let ls = [];
        ls.push('one', 'two', 'two');
        let index = ls.indexOf('two');
        expect(index).toBe(1);
    });

    it("should return index if element exist", () => {
        let ls = [];
        ls.push('elem');
        let index = ls.indexOf('elem');
        expect(index).toBe(0);
    });

});