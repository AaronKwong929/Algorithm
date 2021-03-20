/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[s.length - i - i]] = [s[s.length - 1 - i], s[i]];
    }
};
