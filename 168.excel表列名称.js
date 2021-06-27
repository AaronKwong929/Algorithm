/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const mod26 = num => {
        if (num <= 26) {
            return [num];
        }
        if (num % 26 === 0) {
            return mod26(num / 26 - 1).concat([26]);
        }
        return mod26(Math.floor(num / 26)).concat([num % 26]);
    };
    return mod26(columnNumber)
        .map(num => String.fromCharCode(num + 65 - 1))
        .join('');
};
// @lc code=end
console.log(convertToTitle(52));
