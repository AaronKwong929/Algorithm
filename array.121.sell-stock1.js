/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // let min = Number.MAX_SAFE_INTEGER,
    //     max = 0;
    // for (let i = 0, price; i < prices.length; i++) {
    //     price = prices[i];
    //     min = Math.min(min, price);
    //     max = Math.max(max, price - min);
    // }
    // return max;
    let min = prices[0];
    let dp = new Array(prices.length).fill(0);
    for (let i = 1, price; i < prices.length; i++) {
        price = prices[i];
        min = Math.min(min, price);
        dp[i] = Math.max(dp[i - 1], price - min); // dp[i-1] 意思是 前面 i-1 天最大收益
    }

    return dp[prices.length - 1];
};

console.log(maxProfit([2, 4, 1]));
