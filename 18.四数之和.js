/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (40.59%)
 * Likes:    918
 * Dislikes: 0
 * Total Accepted:    203.9K
 * Total Submissions: 504.9K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] ：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const { length } = nums;
    if (length < 4) return [];
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < length - 3; i++) {
        for (let j = i + 1; j < length - 2; j++) {
            let left = j + 1,
                right = length - 1;
            while (left < right) {
                const leftVal = nums[left],
                    rightVal = nums[right];
                const sum = nums[i] + nums[j] + leftVal + rightVal;
                if (sum === target) {
                    res.push([nums[i], nums[j], leftVal, rightVal]);
                    while (left < right && leftVal === nums[left]) left++;
                    while (left < right && rightVal === nums[right]) right--;
                } else if (sum < target) left++;
                else right--;
            }
            while (j < length && nums[j] === nums[j + 1]) j++;
        }
        while (i < length && nums[i] === nums[i + 1]) i++;
    }
    return res;
};

// @lc code=end
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
