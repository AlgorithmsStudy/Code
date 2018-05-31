var HashMap = require('hashmap');

let fib = function fib(n) {
 if (n <= 1) {
   return 1;
 }
 let x = fib(n-1);
 let y = fib(n-2);
 return x + y;
}


let fib2 = function fib2(n) {
  // Key is a number k. Value is fib(k).
  let h = new HashMap();
  h.set(0,1);
  h.set(1,1);
  return fibHelper(h,n);
}


fib2(5)
h = {
0: 1
1: 1
2: 2
3: 3
4: 5
5: 8
}
fibHelper(h, 5) = 8

let fibHelper = function fibHelper(h, n) {
  if (h.has(n)) {
    return h.get(n);
  }
  let x = fibHelper(h,n-1);
  let y = fibHelper(h,n-2);
  h.set(n, x+y);
  return x+y;
}

fh(0) = 1 step
fh(1) = 1 step
fh(2) = 1 + 1 + 1 = 3 steps
fh(3) = 1 + 3 + 1 = 5 steps
fh(4) = 1 + 5 + 1 (already computed) = 7 steps
fh(5) = 1 + 7 + 1 (already computed) = 9 steps
fh(6) = 1 + 9 + 1 (already computed) = 11 steps
...
fh(n) = 2n - 1 steps
O(n)




console.log(fib2(1000));
