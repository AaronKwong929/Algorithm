/**
 * 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 * 比如，字符串aabcccccaaa会变为a2b1c5a3。
 * 若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/compress-string-lcci
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} S
 * @return {string}
 */
const compressString = (S) => {
    const { length } = S;
    let i = 0,
        j = i + 1,
        result = ``;
    while (i < length) {
        let temp = S[i];
        while (S[i] === S[j]) {
            j++;
        }
        result += `${temp}${j - i}`;
        i = j;
        j++;

        if (result.length >= length) return S; // 超出长度直接返回S 更快
    }
    // return result.length < length ? result : S;
    return result;
};

console.log(compressString(`abbccd`));

/**
 * 双指针yyds
 */
