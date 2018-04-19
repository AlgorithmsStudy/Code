
const BinarySearchTree = require('./binary_search_tree').BinarySearchTree;

let bst = new BinarySearchTree()

let test_insert = function(value) {
  console.log("Inserting " + value)
  bst.insert(value)
  console.log("Preorder: " + bst.preorder())
  console.log("Object:  ")
  console.log(bst)
  console.log("")
}

let test_contains = function(value) {
  console.log("Contains ", value, "gives", bst.contains(value))
}

test_insert(10)
test_insert(20)
test_insert(15)
test_insert(5)
test_contains(15)
test_contains(10)
test_contains(4)
test_contains(21)


bst = new BinarySearchTree()
test_contains(4)




