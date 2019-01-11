const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    add(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            //this.tail = node;
        } else {
            let newNode = this.head;
            let prev;
            while(newNode.next){
                prev = newNode;
                newNode = newNode.next;
            }
            node.prev = newNode;
            newNode.next = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }
    get(index){
      if(index > this.length){
          return false;
      } else {
          let current = this.head;
          let prev;
          let count = 0;
          while( count < index){
              prev = current;
              current = current.next;
              count++;
          }
          return current;
      }

    }

    indexOf(data) {
        let i = 0;
        let curr = this.head;
        while (curr.next && curr.data !== data) {
            curr = curr.next
            i++
        }
        //console.log(i)
        return curr.data === data ? i : false;

    }
    
    // add()  
    // get() 
    // indexOf()  
    // insertAt()
    // removeAt()

}
module.exports = LinkedList;
