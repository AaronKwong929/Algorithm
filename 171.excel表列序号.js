/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (69.30%)
 * Likes:    228
 * Dislikes: 0
 * Total Accepted:    73.3K
 * Total Submissions: 105.6K
 * Testcase Example:  '"A"'
 *
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 *
 * 例如，
 *
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28
 * ⁠   ...
 *
 *
 * 示例 1:
 *
 * 输入: "A"
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入: "AB"
 * 输出: 28
 *
 *
 * 示例 3:
 *
 * 输入: "ZY"
 * 输出: 701
 *
 * 致谢：
 * 特别感谢 @ts 添加此问题并创建所有测试用例。
 *
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    // const stack = columnTitle.split(``);
    // let res = 0,
    //     count = 0;
    // while (stack.length) {
    //     console.log(stack);
    //     const num = stack.pop().charCodeAt() - 64;
    //     res += num * Math.pow(26, count);
    //     count++;
    // }
    // return res;
    let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        res = res * 26 + columnTitle[i].charCodeAt() - 64;
    }
    return res;
};
// @lc code=end

console.log(titleToNumber(`ZY`));
