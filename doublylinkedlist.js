

class DoubleNode {
  constructor(v, n, p) {
    this.value = v;
    this.next = n;
    this.prev = p
  }
}

// Abstract Data Type:
// Deque (Doubly ended queue)
// Four operations:
// enqueueFront  -- put an element in the front
// dequeueFront -- take an element off the front
// enqueueBack 
// dequeueBack

// If you only ever use enqueueFront and dequeueFront, you essentially have a stack.
// If you only use enqueueBack and dequeueFront, you have queue.

// With a singly linked list, you can only traverse in one direction. With a doubly linked
// list you can traverse in both directions.


class Deque {
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
}


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

let d = new Deque()
d.enqueueFront(1)
d.enqueueFront(2)
console.log(d)
console.log(d.dequeueFront())
console.log(d.dequeueFront())
