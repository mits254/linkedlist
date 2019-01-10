const Node = require('./node');

class LinkedList {
    constructor() {

        this.length = 0;
        this.head = null;
        this.tail = null;

    }

    add(data) {

        if (this.length === 0) {
            this.head = this.tail = new Node(data);
        } else {
            let newNode = new Node(data, this.tail);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    get(i, node) {
        if (Object.is(node, undefined)) {
            node = this.head;
        }
        if (i === 0) {
            return node;
        } else {
            return this.get(--i, node.next)
        }
    }

    indexOf(index) {
        let node = this.get(index);
        return node.data;
    }



    insertAt(index, data) {

        if (index > this.length || index < 0) {
            throw new Error('something happened');
        }
        if (index == this.length) {
            this.add(data);
            return this;
        }

        let nextNode = this.get(index);
        let prevNode = nextNode.prev;

        let newNode = new Node(data);
        newNode.next = nextNode;

        if (!Object.is(prevNode, null)) {
            prevNode.next = newNode;
            newNode.prev = prevNode;
            nextNode.prev = newNode;
            
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //removeAt()
    removeAll() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        return this;
    }
}

module.exports = LinkedList