/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const res = [0, 1];
    for (let i = 2; i <= n; i++) {
        res[i] = (res[i - 1] + res[i - 2]) % 1000000007;
    }
    return res[n];
};

console.log(fib(5));

// 头递归，记得题目有说值要求模
