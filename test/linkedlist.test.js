const expect = require('chai').expect
const linkedList = require('../linkedlist')




describe("linked list", () => {
    describe("creating a linked list", () => {
        it("should create a linked list", () =>{
            const list = new linkedList ()
            
            list.add('hey')
            list.add('sup')

            expect(list.length).to.equal(2)
        })
    })
})

describe("indexOf", () => {
    describe("it returns the index of a given element", () => {
        it("should return a number", () =>{
            const list = new linkedList ()

            list.add(123)
            list.add(456)
            list.add(789)

            expect(list.indexOf(0)).to.equal(123);
            expect(list.indexOf(1)).to.equal(456);
            expect(list.indexOf(2)).to.equal(789);
        })
    })
})

describe("isEmpty", () => {
    describe("if the list is empty", () => {
        it("should return true", () =>{
            const list = new linkedList ()

            expect(list).to.equal(true)
        })
    })
})

describe("add", () => {
    describe("adds an element at the end of list", () => {
        it("create a new index at the end", () =>{
            const list = new linkedList ()

            list.add(666);
            list.add(420);

            expect(list.length).to.equal(2);
            expect(list.indexOf(1)).to.equal(420);

        })
    })
})

describe("removeFrom", () => {
    describe("removes and returns an element from the list", () => {
        it("return a specific index", () =>{
            const list = new linkedList ()

            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.add(5);

            list.removeFrom(2)
            
            expect(list.at(2)).to.equal(4);
        })
    })
})