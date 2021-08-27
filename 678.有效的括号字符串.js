/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 *
 * https://leetcode-cn.com/problems/valid-parenthesis-string/description/
 *
 * algorithms
 * Medium (35.00%)
 * Likes:    277
 * Dislikes: 0
 * Total Accepted:    18.1K
 * Total Submissions: 51.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
 *
 *
 * 任何左括号 ( 必须有相应的右括号 )。
 * 任何右括号 ) 必须有相应的左括号 ( 。
 * 左括号 ( 必须在对应的右括号之前 )。
 * * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
 * 一个空字符串也被视为有效字符串。
 *
 *
 * 示例 1:
 *
 *
 * 输入: "()"
 * 输出: True
 *
 *
 * 示例 2:
 *
 *
 * 输入: "(*)"
 * 输出: True
 *
 *
 * 示例 3:
 *
 *
 * 输入: "(*))"
 * 输出: True
 *
 *
 * 注意:
 *
 *
 * 字符串大小将在 [1，100] 范围内。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const left = [],
        star = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === `(`) {
            left.push(i);
        } else if (s[i] === `*`) {
            star.push(i);
        } else {
            if (!left.length) {
                if (!star.length) return false;
                star.pop();
            } else {
                left.pop();
            }
        }
    }
    if (left.length > star.length) return false;
    while (left.length && star.length) {
        if (left.pop() > star.pop()) return false;
    }
    return true;
};
// @lc code=end

// 一次遍历，遇到 ( left入栈下标，遇到 * star入栈下标
// 遇到 ) 先判断left有无长度 无就判断star长度，有就pop 继续，无就false
//            left pop
// 循环结束
// 判断left.length > star.length  false
// while(left.length right.length) 一起pop
//pop返回