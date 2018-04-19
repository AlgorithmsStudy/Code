
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

Binary search tree runtimes:

contains:
 Worst case O(n). Long skinny tree, looking up a value adjacent to the single leaf.
 Best case O(1). (you find it immediately)
 Average case, assuming the tree is fat -- close to complete -- should be more like O(log n).
 The worst case can also be phrased as O(h) where h is the height of the tree.

We just implemented a Set ADT (insert and contains).

Comparision to Array based Set.
BST: insert O(log n), contains O(log n)  assuming kept balanced.
ArraySet: insert O(1), contains O(n)
SortedArraySet: insert requires shifting elements O(n) , contains (using binary search) O(log n) (no assumptions about blanced)

What if I want to do all my insertions first, and then only do lookups.
Assume n insertions to get n elements.
BST: n inserts O(n log n), contains O(log n)
ArraySet: n inserts takes O(n), contains O(n)
SortedArraySet: insert unordered, then sort, to give n insertions in O(n log n) (quick or merge sort), contains O(log n) for binary search.

HashSet: insertion time O(1), contains O(1)


A complete tree of height h has 2^h = n vertices.
For example, height 2 has 2^2 -1 = 4 -1 = 3 vertices.
For example, height 3 has 2^3 - 1 = 8 - 1= 7 

