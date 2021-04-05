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
    // nums1.splice(m, n, ...nums2);
    // return nums1.sort((a, b) => a - b);
    const res = [];
    let p1 = 0,
        p2 = 0;
    while (p1 < m || p2 < n) {
        // if (p1 === m) {
        //     res.push(nums2[p2++]);
        // } else if (p2 === n) {
        //     res.push(nums1[p1++]);
        // } else {
        //     if (nums1[p1] >= nums2[p2]) {
        //         res.push(nums2[p2++]);
        //     } else {
        //         res.push(nums1[p1++]);
        //     }
        // }
        if (p1 === m) {
            res.push(nums2[p2++]);
        } else {
            if (nums1[p1] >= nums2[p2]) {
                res.push(nums2[p2++]);
            } else {
                res.push(nums1[p1++]);
            }
        }
    }
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = res[i];
    }
    return nums1;
};
// @lc code=end

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
