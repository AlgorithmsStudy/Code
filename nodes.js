
exports.Node = class Node {
  constructor(v,n) {
    this.value = v;
    this.next = n;
  }
}

exports.DoubleNode = class DoubleNode {
  constructor(v, n, p) {
    this.value = v;
    this.next = n;
    this.prev = p;
  }
}

exports.TreeNode = class TreeNode {
  constructor(v, l, r) {
    this.value = v;
    this.left = l;
    this.right = r;
  }
}

