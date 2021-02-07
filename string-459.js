/**
 *
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    return (s + s).slice(1, -1).includes(s);
};

/**
 * 重复字符串会满足以下条件
 * s = `abab`, s+s = `abababab`
 * 去掉头和尾 bababa，ab会出现至少一次
 *
 * s = `aba` s+s = `abaaba`
 * 去掉头尾 baab
 * 不存在aba
 */
