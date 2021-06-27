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
    if (chars.length === 1) return 1;
    let i = 0,
        j = i + 1,
        res = [];

    while (i < chars.length) {
        while (chars[i] === chars[j]) {
            j++;
        }
        let count = j - i;
        res.push(chars[i]);
        if (count > 1) {
            if (count >= 10) {
                let temp = count + ``;
                for (let k = 0; k < temp.length; k++) {
                    res.push(temp[k]);
                }
            } else {
                res.push(count + ``);
            }
        }
        i = j;
        j++;
    }

    for (let j = 0; j < res.length; j++) {
        chars[j] = res[j];
    }

    return res.length;
};
// @lc code=end
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
