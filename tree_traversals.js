
const TreeNode = require('./nodes').TreeNode;
const Queue = require('./queue').Queue;

exports.preorder = function preorder(root, out) {
  if (root == null) {
    return;
  }
  out.push(root.value);
  preorder(root.left, out);
  preorder(root.right, out);
}

exports.postorder = function postorder(root, out) {
  if (root == null) {
    return;
  }
  postorder(root.left, out);
  postorder(root.right, out);
  out.push(root.value);
}

exports.inorder = function inorder(root, out) {
  if (root == null) {
    return;
  }
  inorder(root.left, out);
  out.push(root.value);
  inorder(root.right, out);
}

exports.levelorder = function levelorder(root, out) {
   let q = new Queue();
   q.enqueue(root);
   while (! q.isEmpty()) {
      let t = q.dequeue();
      if (t != null) {
        out.push(t.value);
        q.enqueue(t.left);
        q.enqueue(t.right);
      }
   }
}

// Homework. Implement traversals without recursion.
// Instead use an explicit stack
function preorderNoRecursion(root, out) {
  // ... 
}

function postorderNoRecursion(root, out) {
  // ... 
}

function inorderNoRecursion(root, out) {
  // ... 
}

// Homework. Construct a tree from two traversals.
function makeTree(preorder, inorder) {
  // ...
}

