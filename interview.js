

// You're given an array of integers,
// and you have to figure if the array contains two number,
// one of which is twice the other.

// [2,4] => true
// [5,1,3] => false
// [6,3,5] => true

let f = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]*2) {
        return true;
      }
    }
  }
  return false;
}

// O(n^2) runtime. Extra space: O(1)

let g = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]*2) {
        return true;
      }
      if (arr[i]*2 === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

// O(n^2) --- n + (n-1) + (n-2) +..+3+2+1 = n * (n+1)/2

let h = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]*2) {
        return true;
      }
      if (arr[j]%2 === 0 && arr[i] === arr[j]/2) {
        return true;
      }
    }
  }
  return false;
}

// O(n^2)

// [6,3,5] => true, [3,6,5] => false (incorrect)

// Make a hash set. Use has?
let x = function(arr) {
  // Make a set.
  // Fill it with the original array input.
  // Loop through the original array.
  // For each element a, use set.has to see if set.has(a*2) or set.has(a/2).
  let h = new Set();
  arr.forEach(function (a) { h.add(a); }); // O(n)
  for (let i = 0; i < arr.length; i++) {
    if (h.has(arr[i]*2)) {
      return true;
    }
  }
  return false;
}

// O(n) runtime. Extra space: O(n)

// Can you do faster? You can't do faster in the worst case because you have to look at all the elements.

// What if the input was sorted orignally? Can you do better?
// You still have to look at all the elements. So, your runtime can't be better than O(n).
// Still, can you do better than the hash set solution? (Yes, there is a solution in the
// sorted case which doesn't use extra space and runs in O(n)). Homework. 
// Also homework (find a solution in the sorted case that's faster than O(n^2) but not O(n)).

// You're given an array of integers. (It's not sorted.) Find the length of the longest chain
// of doubling integers. For example:
// Input: [10, 5, 7, 20, 14] Output: 3 (for the chain 5,10,20).

console.log(f([6,3,5]))
console.log(f([3,6,5]))
console.log(x([6,3,5]))
console.log(x([3,6,5]))

console.log(f([1,3]))
console.log(f([3,1]))
console.log(x([1,3]))
console.log(x([3,1]))

