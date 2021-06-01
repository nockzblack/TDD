describe("Removing an element by index", () => {
    it("can perform a removal by index", () => {
        let ls = [];
        ls.push('something');
        ls.splice(0, 1);
        expect(ls.includes('something')).toBeFalse();
    });

    it("should pass if index is out of bounds", () => {
        let ls = [];
        ls.push('something1', 'something2');
        expect(ls.splice(2, 1).length).toBe(0);
    });

    it("should be minus one lement the length after removal", () => {
        let ls = [];
        ls.push('some', 'something');
        ls.splice(0, 1);
        expect(ls.length).toBe(1);
    });
});