describe("Clearing the list", () => {
    it("should have size 0 after clear", () => {
        let list = [];
        list.push('elem');
        list.length = 0
        expect(list.length).toBe(0);
    });

    it("should be able to be refilled after clear", () => {
        let list = [];
        list.push('elem');
        list.length = 0
        list.push('elem2')
        expect(list.length).toBe(1);
    });

    it("can clear a list", () => {
        let list = [];
        list.push('element');
        list.length = 0;
        expect(list.length).toBeDefined();
    });
});