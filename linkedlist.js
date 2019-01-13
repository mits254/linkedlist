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
    insertAt(data, index) {
        if(index > this.length || index < 0){
            return('wrong index')
        } 
        if(index === this.length){
            return this.add(data);
        }
        
        let nodeAtIndex = this.get(index);
        //console.log(nodeAtIndex);
        let node = new Node(data);
        let previous = nodeAtIndex.prev;
        //console.log(previous);
        previous.next = node;
        node.prev = previous;
        node.next = nodeAtIndex;
        nodeAtIndex.prev = node;
        this.length++;
        return this;
        
      }

    removeAt(value){
        let currNode = this.get(value);
        //console.log(currNode);
        if(currNode){
            if(currNode.prev == null){
                this.head = currNode.next;
            } else {
                currNode.prev.next = currNode.next;
                if(currNode.next){
                  currNode.next.prev = currNode.prev;
                }
            }
            this.length--;
        }

    }

    // add()  
    // get() 
    // indexOf()  
    // insertAt()
    // removeAt()

}
module.exports = LinkedList;
