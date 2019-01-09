const expect = require('chai').expect
const Node = require('../src/node')
const LinkedList = require('../src/linkedlist')


    describe('LinkedList', () => {
        describe('#constructor', () => {
            const list = new LinkedList()

            it('assign 0 to this.length', () => {
                expect(list.length).to.equal(0)
            })
        });
    })

    describe('add', () => {
        it('should assign any nodes to this._head and this._tail if list is empty', () => {
            const data = 101;

            const list = new LinkedList();

            list.add(data);

            expect(list.tail).to.be.an.instanceof(Node)
            expect(list.head).to.be.an.instanceof(Node)
        });

        it('should add new data to the end of list', () => {
            const list = new LinkedList();

            list.add(666);
            list.add(420);

            expect(list.length).to.equal(2);
            expect(list.indexOf(0)).to.equal(666);
            expect(list.indexOf(1)).to.equal(420);
        });

    })

    describe('indexOf', () => {
        it('should return Node.data by index', () => {
            const list = new LinkedList()

            list.add(123)
            list.add(456)
            list.add(789)

            expect(list.indexOf(0)).to.equal(123)
            expect(list.indexOf(1)).to.equal(456)
            expect(list.indexOf(2)).to.equal(789)

        });
    })

    describe('removeAt', () => {
        it('should delete element by index', () => {
            const list = new LinkedList();

            list.append(1)
            list.append(2)
            list.append(3)
            list.append(4)
            list.append(5)

            list.deleteAt(2)

            expect(list.at(2)).to.equal(4)
        });
    });

    describe('insertAt', () => {
        it('should insert data by index', () => {
            const list = new LinkedList()
            const data = 9001
            const position = 1

            list.append(32)
            list.append(47)

            list.insertAt(position, data)

            expect(list.at(position)).to.equal(data)
        });
    });