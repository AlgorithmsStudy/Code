
const TreeNode = require('./nodes').TreeNode;

// TREE FUN = FUN WITH TREES

// Traversals
// Terminology
// Recursion
// Induction

// A traversal is an order for traversing or iterating through the 
// nodes of a tree.

// Pre-order  
// Post-order
// In-order
// Level order (breadth first).

// Terminology
// root
// edge
// node/vertex
// graph, digraph (directed graph)
// trees are acyclic graphs (no loops)
// A leaf is node/vertex where both its left and right subtrees are empty. A leaf has no children.
// A full binary tree is one in which every vertex has two children (non empty subtrees) or no children.

// The recursive defintion of trees.
// * An empty tree is a tree.
// * A root (with a value) along with a left and right subtrees (that are trees) is a tree.


   a
 /  \
b    c
..  . \
       d
       . . 

In a tree of n vertices, how many empty subtrees does it have?
For above: n=4, emptySubtrees = 5.

(root: a, left: (root: b, left: empty, right: empty), right: (root: c, left: empty, right: (root: d, left: empty, right: empty)))

FULL:

   a
 /  \
b    c
   /  \
  e    d

For above: n=5, emptySubtrees = 6.

a
 \
  b
   \
    c
     \
      d
       \
        e

n=5, emptySubtrees = 6.
NOOOO!

If a tree has n nodes then it has n+1 empty subtrees. 
Why? The recursive definition.
Check the definition:
1) If T is the empty tree, then it has n=0 nodes and 1 empty subtree. Note n+1 = 1 = # of empty subtrees.
2) Now take a root with a left and a right subtree. Let's say the left subtree has k nodes. Let's say the right subtree has m nodes.
By induction! We can assume that we've already proven the statement for smaller trees. Let's use that fact to prove it for the bigger tree T.
How many nodes are in the whole tree? n = k + m + 1 (for the root). We know there are k + 1 empty subtrees in the left subtree. We know there
are m+1 empty subtrees in the right subtree. How many empty subtrees are in the whole tree T? Answer: k+1 + m +1 (the amount in the left + the amount in the right). So, k+m+2 = # empty subtrees in t = (k+m+1) +1 = n + 1. Booyah.

Old fashioned way. Proved for n = 0.
Lets prove it for n = 1.
T = has one node, the root. The left and the right subtrees have to have 0 nodes amongst them. So, k =0 and m =0. We know we've proved it for trees with zero nodes. So #EST(left) = k + 1, #EST(right) = m +1 .... EST(T) = n + 1.
and continue for higher n.
----

Pre order traversal. 

Pre-order:
1) For the empty tree, print the empty list.
2) Otherwise, you list the root first, followed by the left subtree in pre-order, followed by the right subtree in pre-order.

Post-order:
1) For the empty tree, print the empty list.
2) Otherwise, print left (in post-order), right (in post-order), root.

PRE: root left right
POST: left right root
IN: left root right.

   a
 /  \
b    c
   /  \
  e    d

Pre:  a b . . c e . . d . .
Post: . . b . . e . . d c a
In:   . b . a . e . c . d .

a
 \
  b
   \
    c
     \
      d
       \
        e
       .  .
Pre: a b c d e
Post: . (. (. (. (. . e) d) c) b) a
In: . a . b . c . d . e .

      a
    /  \
   b    c
 /  \    
e    d     

Pre: a b e . . d . . c . .
Post:  . . e . . d b . . c a
In: . e . b . d . a . c .

Pre: x q t w u
In:  t q x u w
Make the tree.

x = root

      x
    /  \
   q    w
  /    / 
 t    u 

Pre: (x) (q t) (w u)
In: (t q) (x) (u w)

1 2345 67
2345 1 67

Homework. Write a function that takes two traversals and outputs the tree. (Pick any two types of traversals).
----

Breadth first / level order traversal.

1 ->       a
         /  \
2 ->    b    c
      /  \   | \
3 -> e    d  g   f

Level order: a b c e d g f

Not recursive. :(
 😖

Recursion is stack based. Uses the "call stack" (i.e. local variables from calling functions). You can use a stack ADT and a loop instead of recursive calls. (Homework: Write code for post order traversal that isn't recursive.)

Breadth first traversals require a queue.

Algorithm:

function BreadthFirstTraversal(Tree root) {
   Queue q = new Queue();
   q.enqueue(root);
   while (! q.isEmpty()) {
      Tree t = q.dequeue();
      if (t != null) {
        console.log(t.value);
        q.enqueue(t.left);
        q.enqueue(t.right)l
      }
   } 
}

root = [a -- b, c...]
q: front [] back of the queue
t: 
output: a b c e d g f


















