/**
 * @param {number} n
 * @return {number}
 */
const numWays = (n) => {
    const array = [1n, 1n];
    for (let i = 2; i <= n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n] % 1000000007n;
};

console.log(numWays(1));

/**
 * 青蛙跳台阶
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 *
 * n = 0 不跳-> 一种方法  f(0) = 1
 * n = 1 跳1级 -> 一种方法 f(1) = 1
 * n = 2 跳1级，跳1级；跳2级 -> 两种方法 f(2) = 2
 * f(2) = f(1) + f(0) 变种斐波那契
 */
