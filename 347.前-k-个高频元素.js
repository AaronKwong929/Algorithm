/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach(item => {
        if (map.has(item)) map.set(item, map.get(item) + 1);
        else map.set(item, 1);
    });
    if (map.size <= k) return [...map.keys()];
    return bucketSort(map, k);
};

const bucketSort = (map, k) => {
    const arr = [],
        res = [];
    map.forEach((val, key) => {
        if (!arr[val]) arr[val] = [key];
        else arr[val].push(key);
    });
    for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
        if (arr[i]) res.push(...arr[i]);
    }
    return res;
};

// @lc code=end

console.log(topKFrequent([-1, -1], 1));
