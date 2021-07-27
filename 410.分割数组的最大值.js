/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 *
 * https://leetcode-cn.com/problems/split-array-largest-sum/description/
 *
 * algorithms
 * Hard (55.63%)
 * Likes:    521
 * Dislikes: 0
 * Total Accepted:    35.7K
 * Total Submissions: 63.9K
 * Testcase Example:  '[7,2,5,10,8]\n2'
 *
 * 给定一个非负整数数组 nums 和一个整数 m ，你需要将这个数组分成 m 个非空的连续子数组。
 *
 * 设计一个算法使得这 m 个子数组各自和的最大值最小。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [7,2,5,10,8], m = 2
 * 输出：18
 * 解释：
 * 一共有四种方法将 nums 分割为 2 个子数组。 其中最好的方式是将其分为 [7,2,5] 和 [10,8] 。
 * 因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,4,5], m = 2
 * 输出：9
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,4,4], m = 3
 * 输出：4
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let low = getMax(nums),
        high = getSum(nums) + 1;
    while (low < high) {
        const mid = low + ((high - low) >> 2);
        const n = split(nums, mid);
        if (n <= m) high = mid;
        else low = mid + 1;
    }
    return low;
};
const getMax = nums =>
    nums.reduce((max, cur) => Math.max(max, cur), 0);
const getSum = nums => nums.reduce((sum, cur) => (sum += cur), 0);
const split = (nums, max) => {
    let res = 1,
        sum = 0;
    for (const i of nums) {
        if (sum + i <= max) sum += i;
        else {
            res++;
            sum = i;
        }
    }
    return res;
};

// @lc code=end
