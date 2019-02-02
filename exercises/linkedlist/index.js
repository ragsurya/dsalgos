// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let node = this.head;
        let counter = 0;
        while(node) {
            counter ++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }
        let node = this.head;
        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }
        
    }

    clear() {
        this.head = null;
    }
    removeFirst() {
        if(this.head) {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if(!this.head) {
            return
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;

        while(node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
       const last = this.getLast();
       if(last) {
           last.next = new Node(data);
       }
       else {
           this.head = new Node(data);
       }
    }
    getAt(position) {
        let counter = 0;

        let node = this.head;
        while(node) {
            if(counter === position) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    } 

    removeAt(position) {

        if(!this.head) {
            return
        }
        if(position === 0) {
            this.head = this.head.next;
            return;
        }
        // let counter = 0;
        // let node = this.head;
        // let prev = null;

        // while(node) {
            
        //      if(counter === position) {
        //         if(node.next) {
        //             prev.next = node.next;
        //         }
        //         else {
        //         prev.next = null
        //         }
        //     }
        //     counter++;
        //     prev = node;
        //     node = node.next;
        // }
        // return null;

        const previous = this.getAt(position - 1);
        if(!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if(!this.head) {
            this.head = new Node(data);
            return;
        }
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index -1) || this.getLast();
        if(previous) {
            previous.next = new Node(data, previous.next);
        }


    }

}

module.exports = { Node, LinkedList };
