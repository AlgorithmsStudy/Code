
const Deque = require('./deque');

Deque.prototype.validate = function() {
  if (this.front === null || this.back === null) {
    return this.front === null && this.back === null;
  }
  if (this.front.prev !== null || this.back.next !== null) {
    return false;
  }
  let n = this.front;
  while (n.next !== null) {
    if (n.next.prev !== n) {
      return false;
    }
    n = n.next;
  }
  return n === this.back;
}

Deque.prototype.toArray = function() {
  let a = [];
  let n = this.front;
  while (n != null) {
    a.push(n.value);
    n = n.next;
  }
  return a;
}

let d = new Deque();
console.log(d.validate());
console.log(d.toArray());
d.enqueueFront(1)
console.log(d.validate());
console.log(d.toArray());
d.enqueueFront(2)
console.log(d.validate());
console.log(d.toArray());
