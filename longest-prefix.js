/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    /**
     *
     * @param {string} a
     * @param {string} b
     * @returns {string}
     */
    const findCommonPrefix = (a, b) => {
        let i = 0;
        while (i < a.length && i < b.length && a[i] === b[i]) {
            i++;
        }
        return i > 0 ? a.substring(0, i) : '';
    };
    if (strs.length > 0) {
        let commonPrefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            commonPrefix = findCommonPrefix(commonPrefix, strs[i]);
        }
        return commonPrefix;
    }
    return '';
};

console.log(longestCommonPrefix([`fl`, `fll`, `fla`]));
