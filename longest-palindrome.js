// /**
//  * @param {string} s
//  * @return {string}
//  */
// const longestPalindrome = (s) => {
//     const dp = [];
//     for (let i = 0; i < s.length; i++) dp[i] = [];

//     let max = -1,
//         str = '';

//     for (let l = 0; l < s.length; l++) {
//         // l 是当前检测字符串的长度 - 1
//         for (let i = 0; i + l < s.length; i++) {
//             // i是左下标，加上当前校验的字串长度要小于字符串长度
//             const j = i + l; // j是右下标

//             if (l === 0) {
//                 // 长度为1必定回文
//                 dp[i][j] = true;
//             } else if (l <= 2) {
//                 // 长度2和3 ，判断首尾是否相同
//                 if (s[i] === s[j]) dp[i][j] = true;
//                 else dp[i][j] = false;
//             } else {
//                 // 长度大于3 判断首尾相同，且去掉首尾也是回文
//                 if (s[i] === s[j] && dp[i + 1][j - 1]) {
//                     dp[i][j] = true;
//                 } else {
//                     dp[i][j] = false;
//                 }
//             }

//             if (dp[i][j] && l > max) {
//                 // 超过当前记录的最大长度，且 dp[i][j]是回文的
//                 max = l;
//                 str = s.substring(i, j + 1); // 包含 i 到 j
//             }
//         }
//     }
//     return str;
// };
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
    const dp = [];
    for (let i = 0; i < s.length; i++) dp[i] = [];

    let str = ``,
        max = -1;

    for (let l = 0; l < s.length; l++) {
        // l = 当前检测字符串长度 - 1
        for (let i = 0; i + l < s.length; i++) {
            // i 是左下标，i + l + 1 <= s.length  ==》 i 加检测串长度不能大于 s长度
            const j = i + l; // j是右下标

            if (l === 0) {
                // 长度为1，是回文
                dp[i][j] = true;
            } else if (l <= 2) {
                // 长度 2 / 3 检测头尾是否回文
                if (s[i] === s[j]) dp[i][j] = true;
                else dp[i][j] = false;
            } else {
                // 长度 > 3，判断首尾是否相同，且去掉首尾后是否回文
                if (s[i] === s[j] && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            }

            if (l > max && dp[i][j]) {
                // 当前子串长度为最大
                str = s.substring(i, j + 1);
            }
        }
    }

    return str;
};

console.log(longestPalindrome(`abbc`))