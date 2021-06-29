/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (64.00%)
 * Likes:    397
 * Dislikes: 0
 * Total Accepted:    249.4K
 * Total Submissions: 389.5K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 示例 1:
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 * 说明:
 * 你可以假设字符串只包含小写字母。
 *
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const sMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) sMap[s[i]] = 1;
        else sMap[s[i]]++;
    }

    for (let i = 0; i < t.length; i++) {
        if (!sMap[t[i]]) return false;
        if (sMap[t[i]] < 0) return false;
        sMap[t[i]]--;
    }
    return Object.keys(sMap).every(item => sMap[item] === 0);
};
// @lc code=end
