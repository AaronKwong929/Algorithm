/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 *
 * https://leetcode-cn.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (45.77%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    74.3K
 * Total Submissions: 162.4K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 *
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 *
 * 示例1:
 *
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 *
 * 示例 2:
 *
 * 输入:pattern = "abba", str = "dog cat cat fish"
 * 输出: false
 *
 * 示例 3:
 *
 * 输入: pattern = "aaaa", str = "dog cat cat dog"
 * 输出: false
 *
 * 示例 4:
 *
 * 输入: pattern = "abba", str = "dog dog dog dog"
 * 输出: false
 *
 * 说明:
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。
 *
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const str = s.split(` `);
    if (str.length !== pattern.length) return false;
    const { length } = str;
    const leftMap = {},
        rightMap = {};
    for (let i = 0; i < length; i++) {
        const left = pattern[i],
            right = str[i];
        if (
            (leftMap[left] && leftMap[left] !== right) ||
            (rightMap[right] && rightMap[right] !== left)
        )
            return false;
        leftMap[left] = right;
        rightMap[right] = left;
    }
    return true;
};
// @lc code=end
console.log(wordPattern(`jquery`, 'jquery'));
