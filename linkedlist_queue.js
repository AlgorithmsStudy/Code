class Node {
  constructor(v,n) {
    this.value = v;
    this.next = n;
  }
}

// object {
// 	head: null
// }

// [10, 12]

// [9, 10, 12]

// [9, 10, 12]

// front  9, 10, 12  back
// back  12, 10, 9  front

// enqueue at the back
// dequeue at the front
// Which way do the arrows go?



//head 
//  [10]
//  [9] --> [10]
//  [6] --> [9] --> [10]
//  [20] --> [6] --> [9] --> [10]
//  [20] --> [6] --> [9] 
    // [10]--/ garbage collected 🗑

class LinkedListQueue {

	constructor(){
		this.head = null
		this.last = null
	}

	enqueue(v) {

		if (this.last === null){
			this.head = new Node(v, null)
			this.last = this.head
		} else {
			this.head.next = new Node (v, null)
			this.head = this.head.next
		}

	}

	// push2(v) {
	// 	let x = this.head
	// 	this.head = new Node(v,null)
	// 	x.next = this.head

	// 	if (this.head. === null){
	// 		this.last = this.head
	// 	}
	// }

	dequeue() {

		let x = this.last.value
		this.last = this.last.next

		if (this.last === null){
			this.head = null
		}
		
		return x
	}

	peek() {
		return this.last.value
	}

	isEmpty() {

		return this.head === null
	}
}

q = new LinkedListQueue


q.enqueue(13)
console.log(q)
console.log(q.dequeue())
console.log(q)
q.enqueue(14)
console.log(q)

