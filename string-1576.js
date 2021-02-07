/**
 * 给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。
 * 注意：你 不能 修改非 '?' 字符。
 * 题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。
 * 在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    var array = ["a", "b", "c"];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "?") {
            var prev = s[i - 1] || "",
                next = s[i + 1] || "",
                replace = array[0];
            // var replace = array.filter((v) => v != prev && v != next);
            if (replace === prev || replace === next) {
                replace = array[1];
                if (replace === prev || replace === next) {
                    replace = array[2];
                }
            }
            s = s.replace("?", replace[0]);
        }
    }
    return s;
};

console.log(modifyString("?zs"));

/**
 * 问号是否重复只跟前后字符有关，“不存在连续重复的字符”
 * 分情况：
 * a?a a?b  => 只需要有a/b/c即可解决
 */
