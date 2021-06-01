describe("Getting elements by index", () => {
    it("should get the element by index", () => {
        let list = [];
        list.push('some1', 'some2');
        expect(list[1]).toBe('some2');
    });

    it("should be undefined if not index", () => {
        let list = [];
        list.push('some');
        expect(list[1]).toBeUndefined();
    });

    it("can get index after insert the head", () => {
        let list = [];
        list.push('word');
        list.unshift('word2');
        expect(list[0]).toBe('word2');
    });
});