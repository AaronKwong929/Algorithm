/**
 * 给你一个字符串 s ，请你根据下面的算法重新构造字符串：
 * 从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
 * 从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
 * 重复步骤 2 ，直到你没法从 s 中选择字符。
 * 从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
 * 从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
 * 重复步骤 5 ，直到你没法从 s 中选择字符。
 * 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。
 * 在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。
 * 请你返回将 s 中字符重新排序后的 结果字符串 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/increasing-decreasing-string
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
const sortString = (s) => {
    const bucket = Array(26).fill(0),
        aCharCodeAt = "a".charCodeAt();
    for (const i of s) {
        bucket[i.charCodeAt() - aCharCodeAt]++;
    }

    let result = ``;
    while (result.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (bucket[i] !== 0) {
                result += String.fromCharCode(i + aCharCodeAt);
                bucket[i]--;
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (bucket[i]) {
                result += String.fromCharCode(i + "a".charCodeAt());
                bucket[i]--;
            }
        }
    }
    return result;
};

console.log(sortString(`aaaabbbbcccc`));

/**
 * 用桶来记每一个字符出现的次数
 * 要用好charCodeAt()
 * 对字母表遍历一次 -> 得到上升序列
 * 反向遍历一次 -> 下降序列
 * 加入结果
 */