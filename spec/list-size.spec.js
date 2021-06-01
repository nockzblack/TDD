describe("Getting list size", () => {

    it("should have length property", () => {
        let ls = [];
        expect(ls.length).toBeDefined();
    });

    it("should be size three after 3 pushes", () => {
        let ls = [];
        ls.push('1');
        ls.push('2');
        ls.push('3');
        expect(ls.length).toBe(3);
    });

    it("should be size 0 after a pop", () => {
        let ls = [];
        ls.pop();
        expect(ls.length).toBe(0);
    });


});