// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let arr = [0];
//     for (let i=1; i <= n; i++) {
//         if(arr[i-2] !== undefined) {
//             arr[i] = arr[i-1] + arr[i-2];
//         }
//         else {
//             arr[i] = i;
//         }
//     }
//     return arr[n];
// }
// let arr = [0];
// function fib_recursive(n, i) {
//     if(n < 2 ) {
//         return n
//     }
//     return fib_recursive(n - 1) + fib_recursive(n - 2);
// }

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if(cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        console.log(cache);
        return result;
    }
}

function slowFib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}
const fib = memoize(slowFib);
module.exports = fib;
