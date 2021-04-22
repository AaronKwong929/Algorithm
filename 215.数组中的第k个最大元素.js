/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return mergeSort(nums)[k - 1];
};

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left_arr = arr.slice(0, mid);
    var right_arr = arr.slice(mid);
    return merge(mergeSort(left_arr), mergeSort(right_arr));
}

var merge = function (left, right) {
    var result = [],
        il = 0,
        ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] > right[ir]) result.push(left[il++]);
        else result.push(right[ir++]);
    }
    while (il < left.length) result.push(left[il++]);
    while (ir < right.length) result.push(right[ir++]);
    return result;
};

// @lc code=end
