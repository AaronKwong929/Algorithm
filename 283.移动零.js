/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.87%)
 * Likes:    1166
 * Dislikes: 0
 * Total Accepted:    436.6K
 * Total Submissions: 683.5K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slow = 0,
        fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    for (; slow < nums.length; slow++) {
        nums[slow] = 0;
    }
};
// @lc code=end

/**
 * 其实和 26 有序数组移除重复元素 / 27 移除元素一样
 *
 * [0, ..., slow]有序了，将[slow + 1, nums.length - 1] 全部改为0就行
 */
