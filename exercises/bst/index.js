// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(value) {
            if(this.left && value < this.data) {
                this.left.insert(value);
            }
            
            else if(this.right && value > this.data) {
                this.right.insert(value);
            }
            else {
                if(value < this.data) {
                    this.left = new Node(value);
                }
                else if(value > this.data) {
                    this.right = new Node(value);
                }
            }
        }
        contains(data) {
            if(data < this.data && this.left) {
                return this.left.contains(data);
            }
            else if (data > this.data && this.right) {
                return this.right.contains(data);
            }
            if(data === this.data) {
                return this;
            }
            else {
                return null;
            }
             
        }
}

module.exports = Node;
