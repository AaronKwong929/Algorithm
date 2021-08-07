/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (38.23%)
 * Likes:    552
 * Dislikes: 0
 * Total Accepted:    81.3K
 * Total Submissions: 211K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
 *
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 *
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：k = 2, prices = [2,4,1]
 * 输出：2
 * 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 *
 * 示例 2：
 *
 *
 * 输入：k = 2, prices = [3,2,6,5,0,3]
 * 输出：7
 * 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
 * ⁠    随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 =
 * 3 。
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * 0
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (max_k, prices) {
    const { length } = prices;
    if (length === 0) return 0; // 注意
    if (max_k > length / 2) return maxProfit_k_inf(prices);
    const dp = new Array(length)
        .fill([])
        .map(() =>
            new Array(max_k + 1).fill([]).map(() => new Array(2).fill(0))
        ); // 注意

    for (let i = 0; i < length; i++) {
        for (let k = max_k; k >= 1; k--) {
            if (i === 0) {
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[i];
                continue;
            }
            dp[i][k][0] = Math.max(
                dp[i - 1][k][0],
                dp[i - 1][k][1] + prices[i]
            );

            dp[i][k][1] = Math.max(
                dp[i - 1][k][1],
                dp[i - 1][k - 1][0] - prices[i]
            );
        }
    }
    return dp[length - 1][max_k][0];
};
const maxProfit_k_inf = prices => {
    const { length } = prices;
    let dp_i_0 = 0,
        dp_i_1 = -Infinity;
    for (let i = 0; i < length; i++) {
        let temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
    }
    return dp_i_0;
};
// @lc code=end
console.log(maxProfit(2, []));
/**
 * base case
 * i - 1 === -1    i === 0
 * dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
 *             = max(0, -Infinity + price[i])
 *             = 0
 * dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k][0] - price[i])
 *             = max(-Infinity, 0 - price[i])
 *             = -price[i]
 */
