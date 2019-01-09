const Node = require('./node');

class LinkedList {
    constructor() {

        this.length = 0;
        this.head = null;
        this.tail = null;

    }

    add(data) {

        if (this.length === 0) {
            this.head = this.tail = new Node(data)
        } else {
            let newNode = new Node(data, this.tail)
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    //indexOf()
    //insertAt()
    //removeAt()
}

module.exports = LinkedList