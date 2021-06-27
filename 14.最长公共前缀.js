/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const helper = (a, b) => {
        let i = 0;
        while (i < a.length && i < b.length && a[i] === b[i]) {
            i++;
        }
        return i > 0 ? a.substring(0, i) : ``;
    };
    if (strs.length === 0) return ``;
    let res = strs[0];
    for (let i = 1; i < strs.length; i++) {
        res = helper(res, strs[i]);
    }
    return res;
};
// @lc code=end
