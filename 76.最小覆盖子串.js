/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = {},
        window = {};

    let left = 0,
        right = 0,
        valid = 0;

    let start = 0,
        len = Number.MAX_SAFE_INTEGER; // 最小串起点 和 长度

    // 将 need map初始化
    for (let i = 0; i < t.length; i++) {
        if (!need[t[i]]) need[t[i]] = 0;
        need[t[i]]++;
    }

    while (right < s.length) {
        const char = s[right]; // 移入窗口的数据
        right++;

        if (need[char]) {
            if (!window[char]) window[char] = 0;
            window[char]++;
            if (window[char] === need[char]) valid++;
        }

        // valid 是满足条件的字符的个数，等同于need.size即当前窗口已包含所有 t 中的的字符
        while (valid === Object.keys(need).length) {
            if (right - left < len) {
                start = left; // 更新起点
                len = right - left; // 更新最小长度
            }
            // left指针收缩窗口
            const d = s[left];
            left++;
            if (need[d]) {
                if (window[d] === need[d]) valid--;
                window[d]--;
            }
        }
    }

    return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len);
};
// @lc code=end

console.log(minWindow(`ADOBECODEBANC`, `ABC`));
