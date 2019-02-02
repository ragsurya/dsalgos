// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    //if right node is less than parent
    if(min !== null && node.data < min) {
        return false;
    }

    //if left node is greater than parent
    if(max !== null && node.data > max) {
        return false
    }

    //left node exists then check if left node is valid
    if(node.left && !validate(node.left, min, node.data)) {
       return false
    }

    //right node exists then check if right node is valid
    if(node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

module.exports = validate;
