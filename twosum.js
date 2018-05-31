var HashMap = require('hashmap');

// Problem: You're given a target number and an 
// array of integers. Are there two numbers in the array
// that add to the target?


// O(n^2)
// n = 5, 
// i = 0 j=1..4,
// i = 1 j=2..4,
// i = 2 j=3..4,
// i = 3 j=4,
// (4 + 3+ 2+ 1 = 10).
// n + (n-1) + (n-2)  +... + 3 + 2 +1  = n(n+1)/2 ~ O(n^2)

let twosum = function(target, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) { 
      if ( arr[i] + arr[j] === target ) {
        return true;
      }
    }
  }
  return false;
}

console.log(twosum(3, [1,4,6,2])) // true
console.log(twosum(4, [1,4,6,2])) // false

let twosumHashMap = function(target, arr) {
  let h = new HashMap();
  for (let i = 0; i < arr.length; i++) { // O(n)
    h.set(arr[i], "ardvark");
  }
  for (let i = 0; i < arr.length; i++) { // O(n)
    let v = target - arr[i];
    if (h.has(v)) {
      return true;
    }
  }
  return false;
}

// O(n) + O(n) = 2n = O(n)

target = 4
arr = [1,4,6,2]
h = [1:ardvark, 4:ardvark, 6:ardvark, 2:ardvark]
i = 0
v = 4-1 = 3
h.has(3) == false
i = 1
v = 4-4 = 0
h.has(0) == false
i = 2
v = 4 - 6 = -2
h.has(-2) == false
i = 2
v = 4 - 2
h.has(2) == true
returns true.

i=0, target - arr[i] = target - arr[0] = 7 - 1 = 6 

console.log(twosum(3, [1,4,6,2])) // true
console.log(twosum(4, [1,4,6,2])) // false

let twosumSorted = function(target, arr) {
  sortedArray = arr.sort();  // O(n log n)
  for (int i = 0; i < sortArray.length; i++) { // O(n log n)
    if (binarySearchContains(sortedArray, target - sortedArray[i])) {
      return true;
    }
  }
  return false;
}
// Total: nlogn + nlogn = 2nlog(n) ~ O(n log n)

