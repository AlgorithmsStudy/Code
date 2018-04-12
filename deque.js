
const DoubleNode = require('./nodes').DoubleNode;

// Deque: Doubly ended queue.
// If you only ever use enqueueFront and dequeueFront, you essentially have a stack.
// If you only use enqueueBack and dequeueFront, you have queue.
// With a singly linked list, you can only traverse in one direction. With a doubly linked
// list you can traverse in both directions.
module.exports = class Deque {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueueFront(v) {
    if (this.front == null) {
      this.front = new DoubleNode(v, null, null)
      this.back = this.front
    } else {
      let n = new DoubleNode(v, null, null) 
      let oldFront = this.front
      this.front = n
      this.front.next = oldFront
      oldFront.prev = this.front
    }
  }

  enqueueFront2(v) {
    if (this.front == null) {
      this.front = new DoubleNode(v, null, null)
      this.back = this.front
    } else {
      this.front = new Node(v, this.front, null)
      this.front.next.prev = this.front
    }
  }

  dequeueFront() {
    let v = this.front.value
    if (this.front.next == null) {
      this.front = null
      this.back = null
    } else {
      this.front = this.front.next 
      this.front.prev = null
    }
    return v
  }

  dequeueBack() {
    let v = this.back.value
    if (this.back.prev == null) {
      this.back = null
      this.front = null
    } else {
      this.back = this.back.prev 
      this.back.next = null
    }
    return v
  }

  enqueueBack(v) {
    if (this.back == null) {
      this.back = new DoubleNode(v, null, null)
      this.front = this.back
    } else {
      this.back = new Node(v, null, this.back)
      this.back.prev.next = this.back
    }
  }

}

// Misc pictures:

// front -> [3]  <- back
//    next  [.] 
//    prev  [.]

// front -> [3]    [7]    [11]  <- back
//    next  [ ] -> [ ] -> [ .]
//    prev  [.] <- [ ] <- [  ]

// front -> [4]    [3]    [7]    [11]  <- back
//    next  [ ] -> [ ] -> [ ] -> [ .]
//    prev  [.] <- [ ] <- [ ] <- [  ]

//          [4] f> [3]    [7]    [11]  <- back
//    next  [ ] -> [ ] -> [ ] -> [ .]
//    prev  [.]    [.] <- [ ] <- [  ]
