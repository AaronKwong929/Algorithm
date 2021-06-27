/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let res = 0;
    const { length } = s;
    for (let i = 0; i < length; i++) {
        const val = map[s[i]];
        if (i + 1 < length && val < map[s[i + 1]]) {
            res -= val;
        } else {
            res += val;
        }
    }
    return res;
};
// @lc code=end
