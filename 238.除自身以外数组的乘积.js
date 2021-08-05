/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 *
 * https://leetcode-cn.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (72.03%)
 * Likes:    883
 * Dislikes: 0
 * Total Accepted:    127.3K
 * Total Submissions: 176.3K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i]
 * 之外其余各元素的乘积。
 *
 *
 *
 * 示例:
 *
 * 输入: [1,2,3,4]
 * 输出: [24,12,8,6]
 *
 *
 *
 * 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
 *
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 *
 * 进阶：
 * 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const { length } = nums;
    const left = [];
    const right = [];
    const res = [];

    left[0] = 1;
    right[length - 1] = 1;

    for (let i = 1; i < length; i++) left[i] = nums[i - 1] * left[i - 1];
    for (let i = length - 2; i >= 0; i--) right[i] = nums[i + 1] * right[i + 1];
    for (let i = 0; i < length; i++) res[i] = left[i] * right[i];

    return res;
};
// @lc code=end

/**
 * 当前数左边*当前数右边 = 当前除当前数的乘积
 * left 代表 i 的左侧数字乘积
 * right 代表 j 的右侧数字乘积
 * left[0] 的左边  right[0]的右边 都没有数字，初始化为 1
 * [4, 5, 1, 8, 2]
 * left[1] = left[0] * num[0]   left = [1, 4, 20, 20, 160]
 * right = [80, 16, 16, 2, 1]
 */
