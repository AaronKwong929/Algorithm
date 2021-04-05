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
    const { length } = nums,
        res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < length; i++) {
        let left = i + 1,
            right = length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                const leftValue = nums[left],
                    rightValue = nums[right];
                while (left < length && nums[left] === leftValue) {
                    left++;
                }
                while (right > left && nums[right] === rightValue) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        while (nums[i] === nums[i + 1] && i < length - 1) {
            i++;
        }
    }
    return res;
};
// @lc code=end
