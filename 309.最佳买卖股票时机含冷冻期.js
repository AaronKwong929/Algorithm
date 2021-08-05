/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (59.66%)
 * Likes:    842
 * Dislikes: 0
 * Total Accepted:    103.8K
 * Total Submissions: 172.8K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 *
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 *
 *
 * 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 *
 *
 * 示例:
 *
 * 输入: [1,2,3,0,2]
 * 输出: 3
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const { length } = prices;
    let dp_i_0 = 0,
        dp_i_1 = -Infinity;
    for (let i = 0; i < length; i++) {
        let temp = dp_i_0;
        let dp_pre_0 = 0; // dp[i - 2][0]
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]);
        dp_pre_0 = temp;
    }
    return dp_i_0;
};
// @lc code=end

/**
 * 有冷冻期
 *
 * 先状态转移方程
 * dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
 *             = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 *
 * dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 2][k][0] - prices[i])
 *             = max(dp[i - 1][1], dp[i - 2][0] - prices[i])
 * sell 之后要等一天才能交易，所以再次购买的时候需要从 i - 2 开始算
 * temp = dp_i_0
 * 然后 dp_pre_0 参与计算，计算完成后才有 dp_pre_0 = temp 实现跨天 
 */
