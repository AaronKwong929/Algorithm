/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (57.02%)
 * Likes:    1755
 * Dislikes: 0
 * Total Accepted:    507.3K
 * Total Submissions: 887.7K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 *
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 *
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 *
 *
 * 示例 2：
 *
 *
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let dp_i_0 = 0,
        dp_i_1 = -Infinity; // 考虑dp[0][1] 即是 -Infinity
    for (let i = 0; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
};
// @lc code=end

/**
 * 先套状态转移方程
 *
 * dp[i][1][0] = max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
 * dp[i][1][1] = max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])
 *             = max(dp[i - 1][1][1], -prices[i]) // dp[i][0][0] 没有交易次数没有持仓，利润为 0
 *
 * 这题的 k = 1，不会对状态转移方程造成影响，代码要简化
 * dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 * dp[i][1] = max(dp[i - 1][1], -prices[i])
 */

/**
 * 第一版
 * const dp = new Array(prices.length).fill([]).map(() => new Array(2));
    for (let i = 0; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[prices.length - 1][0];


 * i - 1 = -1 有越界问题，要处理
  dp[-1][0] = max(dp[-1][0], dp[-1][1] + prices[i])
            = max(0, -Infinity + prices[i])
            = 0
  dp[-1][1] = max(dp[-1][1], dp[-1][0] - prices[i])
            = max(-Infinity, -prices[i])
            = -prices[i]
 */

/**
 * 第二版（对比第一版增加边界条件）（不要想当然写边界条件，要套转移方程得出结果）
 *     
 * const dp = new Array(prices.length).fill([]).map(() => new Array(2));
    for (let i = 0; i < prices.length; i++) {
        if (i - 1 === -1) {
            dp[i][0] = 0;
            // dp[i][0] = max(dp[-1][0], dp[-1][1] + prices[i])
            //          = max(0, -Infinity + prices[i])
            //          = 0
            dp[i][1] = -prices[i];
            // dp[i][1] = max(dp[-1][1], dp[-1][0] - prices[i])
            //          = max(-Infinity, 0 - prices[i])
            //          = -prices[i]
            continue;
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[prices.length - 1][0];
 */

/**
 * 观察状态转移方程
 * dp[i][] 的变化只和dp[i - 1][]有关，优化代码
 */

/**
 * 第三版
 * let dp_i_0 = 0,
        dp_i_1 = -Infinity; // 考虑dp[0][1] 即是 -Infinity
    for (let i = 0; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
 */
