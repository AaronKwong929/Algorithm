/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let i = 0,
        j = n;
    const res = [];
    for (; i < n; i++, j++) {
        res.push(nums[i]);
        res.push(nums[j]);
    }
    return res;
};
// @lc code=end

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
