/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    // 双指针
    let slow = 0,
        fast = 0;
    let temp = chars[0],
        count = 1;

    while (fast < chars.length) {
        fast++;
        if (temp !== chars[fast]) {
            const lenStr = String(count),
                { length } = lenStr;
            if (count > 1) {
                for (let i = 0; i < length; i++) {
                    chars[slow + 1 + i] = lenStr[i];
                }
                slow += length; // slow 指向末位数字
            }
            slow++;
            count = 1;
            temp = chars[fast];
        } else {
            count++;
        }
    }
    return slow;
};
// @lc code=end
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
