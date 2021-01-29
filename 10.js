/**
 * @param {number} n
 * @return {number}
 */

const hash = {
    0: 0n,
    1: 1n,
};

const fib = (n) => {
    if (hash.hasOwnProperty(n)) return hash[n];
    hash[n] = fib(n - 1) + fib(n - 2);
    return hash[n] % 1000000007n;
};

console.log(fib(150));

// 缓存已知结果 hash
// 要用 bigInt