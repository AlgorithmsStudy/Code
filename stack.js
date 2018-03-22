class MyArray {
   constructor(len) {
   	 this.len = len;
   	 this.arr = new Array(len).fill(null);
   }

   get(index) {
   	return this.arr[index];
   }

   set(index, value) {
     this.arr[index] = value;
   }

   length() {
   	 return this.len;
   }
}

class FixedArray {
   constructor(len) {
   	 let arr = new Array(len).fill(null);
   	 this.get = function(index) {
 	  	return arr[index];
 	 }
 	 this.set = function(index, value) {
 	 	arr[index] = value;
 	 }
 	 this.length = function() { return len; }
   }
}


class ArrayStack {
    // member: arr (array of values)
	constructor() {
      this.arr = [];
	}

    // input: a value to be put on the top of the stack
    push(x) {
      this.arr.push(x); // put it at the end
    }
    
    
    // output: an object, from the top of the stack.
	pop() {
	  // could have return this.arr.pop()
      let x = this.arr[this.arr.length - 1];
      this.arr = this.arr.slice(0, this.arr.length -1); // delete last element
      return x;
	}

	peek() {
		return this.arr[this.arr.length -1];
	}

	isEmpty() {
		return this.arr.length == 0;
	}
}

class FixedArrayStack {

	constructor() {
		let arr = new FixedArray(3);
		let size = 0;
		this.isEmpty = function() { return size === 0; };
		this.push = function(value) {
			if (size === arr.length()) {
				let bigArr = new FixedArray(arr.length()*2);
				for (let i = 0; i < arr.length(); i++) {
					bigArr.set(i, arr.get(i));
				}
				arr = bigArr;
			}
			arr.set(size, value);
			size++;
		}
		this.pop = function() {
			let x = arr.get(size - 1);
			arr.set(size - 1, null);
			size--;
			return x;
		}
		this.peek = function() {
			return arr.get(size -1);
		}
	}
}

// arr: [null, null, null], size: 0
// s.push(3);
// arr: [3, null, null], size: 1
// s.push(4);
// arr: [3, 4, null], size: 2
// s.push(7);
// arr: [3, 4, 7], size: 3
// console.log(s.pop()); // output 7
// arr: [3, 4, null], size: 2

let s = new FixedArrayStack();
s.push(4); // bot -> 4 <- top
s.push(5); // bot -> 4, 5 <- top
console.log(s.peek());  // output: 5
s.push(6); // bot -> 4, 5, 6 <- top
console.log(s.pop());  // output: 6 // bot -> 4, 5 <- top
console.log(s.pop());  // output: 5 // bot -> 4 <- top
console.log(s.peek()); // output: 4
console.log(s);

// console.log(new Array(5).fill(null))

// let a = new FixedArray(4);
// let b = new FixedArray(5);
// a.set(2, "hi");
// b.set(2, "bye");
// b.set(4, "lol");

function printFixedArray(a) {
	let out = "["
	for (let i = 0; i < a.length(); i++) {
		out += a.get(i);
		if (i != a.length() -1) {
			out += ", "
		}
	}
	out += "]";
	console.log(out);
}

// console.log(a);
// console.log(b);
// console.log("a:");
// printFixedArray(a);
// console.log("b:");
// printFixedArray(b);


// let c = new MyArray(2);
// c.set(0, "hi");
// printFixedArray(c);
// c.len = 5;
// printFixedArray(c);







