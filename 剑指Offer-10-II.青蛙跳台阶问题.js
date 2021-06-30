/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    const res = [1, 1];
    for (let i = 2; i <= n; i++) {
        res[i] = (res[i - 1] + res[i - 2]) % 1000000007;
    }
    return res[n];
};

console.log(numWays(7));
