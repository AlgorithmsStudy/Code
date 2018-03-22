class Node {
  constructor(v,n) {
    this.value = v;
    this.next = n;
  }
}

// object {
// 	head: null
// }

//head 
// head --> [10]
// head --> [9] --> [10]
// head --> [6] --> [9] --> [10]
// head --> [20] --> [6] --> [9] --> [10]
// head --> [6] --> [9] --> [10]
    // [20]--/ garbage collected 🗑

class LinkedListStack {

	constructor(){
		this.head = null
	}

	push(v) {
		this.head = new Node (v, this.head)
	}

	pop() {

		let x = this.head.value
		this.head = this.head.next

		return x
	}

	peek() {
		return this.head.value
	}

	isEmpty() {

		return this.head === null
	}
}