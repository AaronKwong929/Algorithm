/**
 * 给你一个由 '('、')' 和小写字母组成的字符串 s。
 * 你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。
 * 请返回任意一个合法字符串。
 * 有效「括号字符串」应当符合以下 任意一条 要求：
 * 空字符串或只包含小写字母的字符串
 * 可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
 * 可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var minRemoveToMakeValid = function (s) {
//     const { length } = s;
//     let result = ``;
//     const stack = [];
//     for (let i = 0; i < length; i++) {
//         if (s[i] === `(`) {
//             stack.push(s[i]);
//         } else if (s[i] === ")") {
//             const temp = stack.pop();
//             if (temp) {
//                 result += s[i];
//             }
//         } else {
//             result += s[i];
//         }
//     }
//     return result;
// };

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    // 记录需要删除的多余括号的索引
    const { length } = s,
        left = [],
        right = [];
    for (let i = 0; i < length; i++) {
        const char = s[i];
        if (char === "(") {
            left.push(i);
        } else if (char === ")") {
            // 如果有对应的'(', 从删除列表中移除
            // 否则')'是多余的，加入右括号的删除列表
            if (left.length > 0) {
                left.pop();
            } else {
                right.push(i);
            }
        }
    }
    // 根据记录删除
    const res = s.split(""),
        filter = [...left, ...right],
        l = filter.length;
    for (let i = 0; i < l; i++) {
        res[filter[i]] = "";
    }
    return res.join("");
};

console.log(minRemoveToMakeValid(`a)(b)c`));
