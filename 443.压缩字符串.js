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
    // let count = 1;
    // for (let i = 0; i < chars.length; i++) {
    //     if (chars[i] === chars[i + 1]) {
    //         count++;
    //     } else if (count !== 1) {
    //         chars.splice(i - count + 2, count - 1, ...String(count).split(``));
    //         i = i - count + 2;
    //         count = 1;
    //     }
    // }
    // return chars.length;

    //////////////////////////////

    // // 双指针
    // let slow = 0,
    //     fast = 0;
    // let temp = chars[0],
    //     count = 1;

    // while (fast < chars.length) {
    //     fast++;
    //     if (temp !== chars[fast]) {
    //         const lenStr = String(count),
    //             { length } = lenStr;
    //         if (count > 1) {
    //             for (let i = 0; i < length; i++) {
    //                 chars[slow + 1 + i] = lenStr[i];
    //             }
    //             slow += length; // slow 指向末位数字
    //         }
    //         slow++;
    //         count = 1;
    //         temp = chars[fast];
    //     } else {
    //         count++;
    //     }
    // }
    // return slow;
    let slow = 0,
        fast = 0,
        temp = chars[0],
        count = 0;
    while (fast < chars.length) {
        chars++;
        if (temp !== chars[fast]) {
            if (count > 1) {
                const lenStr = String(count);
                const { length } = count;
                for (let i = 0; i < length; i++) {
                    chars[i + 1 + slow] = lenStr[i];
                }
                slow += length;
            }
            count = 1;
            slow++;
            temp = chars[fast];
        } else {
            count++;
        }
    }
    return slow;
};
// @lc code=end
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
