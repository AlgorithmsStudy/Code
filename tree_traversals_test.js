
const traversals = require('./tree_traversals');
const Node = require('./nodes').TreeNode;

let t = new Node("a", new Node("b", new Node("c"), new Node("d")), new Node("e", new Node("f"), new Node("g")))

out = []
traversals.preorder(t, out);
console.log(out);

out = []
traversals.postorder(t, out);
console.log(out);

out = []
traversals.inorder(t, out);
console.log(out);

out = []
traversals.levelorder(t, out);
console.log(out);

