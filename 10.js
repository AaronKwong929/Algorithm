/**
 * @param {number} n
 * @return {number}
 */

// const hash = {
//     0: 0n,
//     1: 1n,
// };

// const fib = (n) => {
//     if (hash.hasOwnProperty(n)) return hash[n];
//     hash[n] = fib(n - 1) + fib(n - 2);
//     return hash[n] % 1000000007n;
// };

// console.log(fib(150));

// // 缓存已知结果 hash
// // 要用 bigInt

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
    const list = [0n, 1n];
    for (let i = 2; i <= n; i++) {
        list[i] = list[i - 1] + list[i - 2];
    }
    return list[n] % 1000000007n;
};

console.log(fib(100));
