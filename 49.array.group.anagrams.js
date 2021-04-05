/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const hash = {},
        result = [];
    for (let i = 0; i < strs.length; i++) {
        let alpha = new Array(26).fill(0);
        const str = strs[i];
        for (let j = 0; j < str.length; j++) {
            alpha[str.charCodeAt(j) - 97] += 1;
        }
        const newAlpha = JSON.stringify(alpha);
        if (!hash[newAlpha]) {
            hash[newAlpha] = [];
        }
        hash[newAlpha].push(str);
    }
    for (const k in hash) {
        result.push(hash[k]);
    }
    return result;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
