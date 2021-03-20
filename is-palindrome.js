/**
 *
 * @param {string} str
 */
const isPalindrome = (str) => {
    const a = str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "")
        .split("");

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
};
