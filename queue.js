const Node = require('./nodes').Node;

exports.Queue = class Queue {
  constructor() {
    this.head = null;
    this.last = null;
  }

  enqueue(v) {
    if (this.last === null){
      this.head = new Node(v, null);
      this.last = this.head;
    } else {
      this.head.next = new Node (v, null);
      this.head = this.head.next
    }
  }

  dequeue() {
    let x = this.last.value;
    this.last = this.last.next;
    if (this.last === null){
      this.head = null;
    }
    return x;
  }

  peek() {
    return this.last.value;
  }

  isEmpty() {
    return this.head === null;
  }
}
