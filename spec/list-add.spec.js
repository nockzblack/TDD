describe("Adding", () => {

    it("can add two elements get the updtated length", () => {
        let list = [];
        list.push('some')
        list.push('some')
        expect(list.length).toBe(2);
    });

    it("should be able to add at head ", () => {
        let list = ['body', 'tail'];
        list.unshift('head')
        expect(list[0]).toBe('head');
    });

    it("should be able to add at tail ", () => {
        let list = ['head', 'body'];
        list.push('tail')
        expect(list[list.length - 1]).toBe('tail');
    });
});