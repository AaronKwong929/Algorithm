/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 *
 * https://leetcode-cn.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (56.12%)
 * Likes:    435
 * Dislikes: 0
 * Total Accepted:    319.8K
 * Total Submissions: 569.8K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给定一个整数数组，判断是否存在重复元素。
 *
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: [1,2,3,1]
 * 输出: true
 *
 * 示例 2:
 *
 *
 * 输入: [1,2,3,4]
 * 输出: false
 *
 * 示例 3:
 *
 *
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!hash.get(nums[i])) hash.set(nums[i], 1);
        else return true;
    }
    return false;
};
// @lc code=end
