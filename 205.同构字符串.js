/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (50.04%)
 * Likes:    364
 * Dislikes: 0
 * Total Accepted:    102.3K
 * Total Submissions: 204.5K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 *
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 *
 *
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入：s = "egg", t = "add"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "foo", t = "bar"
 * 输出：false
 *
 * 示例 3：
 *
 *
 * 输入：s = "paper", t = "title"
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 * 可以假设 s 和 t 长度相同。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const s2t = {},
        t2s = {};
    const { length } = s;
    for (let i = 0; i < length; i++) {
        const x = s[i],
            y = t[i];
        if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) return false;
        s2t[x] = y;
        t2s[y] = x;
    }
    return true;
};
// @lc code=end
