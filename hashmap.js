
const FixedArray = require('./array').FixedArray;

// What's a map aka dictionary aka table?
// A map is an ADT.
// It has the following operations:
// put(key, value) // Stores a key value pair. Overwrites the previous value if present.
// get(key) // returns the value for the given key.
// contains(key) // returns true if the key is in the map.

function hashString(s) {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = hash * 31;
    hash = hash + s.charCodeAt(i)
  }
  return hash
}

//console.log(hashString("abc"));
//console.log(hashString("a"));

//For abc : 31*31*97 + 31*98 + 99


class HashMap{
    constructor() {
        this.arr = new FixedArray(10);
    }

    put(key, value) {
      let hash = hashString(key);
      let index = hash % this.arr.length(); // Takes a value between 0 and < this.arr.length(). I.e. it's perfect for an index.
      this.arr.set(index, {key: key, value: value})
    }

    contains(key) {
      let hash = hashString(key);
      let index = hash % this.arr.length();
      return this.arr.get(index) != null && this.arr.get(index).key == key;
    }

    get(key) {
      let hash = hashString(key);
      let index = hash % this.arr.length();
      return this.arr.get(index).value;
    }
}


let m = new HashMap();
m.put("foo", 1);
m.put("bar", 2);
m.put("cat", 3);
m.put("dog", 4);
console.log(m.contains("foo"))
console.log(m.contains("bar"))
console.log(m.contains("cat"))
console.log(m.contains("dog"))
console.log(m.contains("bark"))
console.log(m.get("bar"))
console.log(hashString("foo"))
console.log(hashString("bar"))
console.log(hashString("cat"))
console.log(hashString("dog"))

for (let i = 0; i < 10; i++) {
  console.log(m.arr.get(i));
}
