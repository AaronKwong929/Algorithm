/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (51.81%)
 * Likes:    159
 * Dislikes: 0
 * Total Accepted:    73.2K
 * Total Submissions: 141.3K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 *
 *
 *
 * 示例 1：
 *
 * 输入："hello"
 * 输出："holle"
 *
 *
 * 示例 2：
 *
 * 输入："leetcode"
 * 输出："leotcede"
 *
 *
 *
 * 提示：
 *
 *
 * 元音字母不包含字母 "y" 。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const map = [`A`, `E`, `I`, `O`, `U`, `a`, `e`, `i`, `o`, `u`];
    let left = 0,
        right = s.length - 1;
    const res = s.split(``);
    while (left <= right) {
        if (!map.includes(res[left])) {
            left++;
            continue;
        }
        if (!map.includes(res[right])) {
            right--;
            continue;
        }
        [res[left], res[right]] = [res[right], res[left]];
        left++;
        right--;
    }
    return res.join(``);
};
// @lc code=end
