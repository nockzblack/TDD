describe("Checking if an elem exists", () => {

    it("should return true if elem exist", () => {
        let ls = [];
        ls.push('hello');
        expect(ls.includes('hello')).toBeTrue();
    });

    it("should be false if element is replaced ", () => {
        let ls = [];
        ls.push('hello');
        expect(ls.includes('hello')).toBeTrue();
        ls[0] = 'how are tou?';
        expect(ls.includes('hello')).toBeFalse();
    });


    it("should return false if object changes", () => {
        let ls = [];
        ls.push('hellow');
        ls[0] = "hello";
        expect(ls.includes('hellow')).toBeFalse();
    });
});