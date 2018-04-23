
const TreeNode = require('./nodes').TreeNode;
const preorder_traversal = require('./tree_traversals').preorder;

exports.BinarySearchTree = class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    if (this.root === null) {
      this.root = new TreeNode(value, null, null)
      return
    }

    let n = this.root
    while (true) {
      if (n.value == value) {
        return
      }
      if (value < n.value) {
        if (n.left === null) {
          n.left = new TreeNode(value, null, null)
          return
        } else {
          n = n.left
        }
      } else {
        if (n.right === null) { 
          n.right = new TreeNode(value, null, null)
          return
        } else {
          n = n.right
        }
      }
    }
  }

  contains(value) {
    let n = this.root 
    while (n !== null) {
      if (n.value === value) {
        return true
      }
      if (value < n.value) {
        n = n.left
      } else {
        n = n.right
      }
    }
    return false
  }

  preorder() {
    let out = []
    preorder_traversal(this.root, out)
    return out
  }

}
