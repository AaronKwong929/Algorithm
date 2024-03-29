/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1,
        p2 = n - 1,
        tail = m + n - 1;
    let cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) cur = nums2[p2--];
        else if (p2 === -1) cur = nums1[p1--];
        else if (nums1[p1] > nums2[p2]) cur = nums1[p1--];
        else cur = nums2[p2--];
        nums1[tail--] = cur;
    }
    return nums1;
};
// @lc code=end

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
