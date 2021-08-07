/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [],
        { length } = nums;
    for (let i = 0; i < length; i++) {
        let left = i + 1,
            right = length - 1;
        while (left < right) {
            const leftVal = nums[left],
                rightVal = nums[right],
                sum = leftVal + rightVal + nums[i];
            if (sum === 0) {
                res.push([nums[i], leftVal, rightVal]);
                while (left < right && leftVal === nums[left]) left++;
                while (left < right && rightVal === nums[right]) right--;
            } else if (sum < 0) left++;
            else right--;
        }
        while (i < length && nums[i] === nums[i + 1]) i++;
    }
    return res;
};
// @lc code=end
