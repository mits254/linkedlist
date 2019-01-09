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



    //insertAt()
    //removeAt()
}

module.exports = LinkedList