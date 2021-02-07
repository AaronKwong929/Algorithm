/**
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
 * 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
 * 例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。
 * [["a","b","c","e"],
 * ["s","f","c","s"],
 * ["a","d","e","e"]]
 * 但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    // 这里可以采用回溯算法的思想，和八皇后问题类似
    const xLen = board.length,
        yLen = board[0].length;
    const k = 0;

    for (let x = 0; x < xLen; x++) {
        for (let y = 0; y < yLen; y++) {
            if (findFun(board, word, x, y, k, xLen, yLen)) return true;
        }
    }
    return false;
};
// 用于判断board[x][y]的上下左右是否有work[k+1]，若有返回true
const findFun = (board, word, x, y, k, xLen, yLen) => {
    if (x < 0 || x >= xLen || y < 0 || y >= yLen || board[x][y] != word[k])
        return false;
    if (k == word.length - 1) return true;
    let temp = board[x][y];
    board[x][y] = "-";
    let res =
        findFun(board, word, x - 1, y, k + 1, xLen, yLen) ||
        findFun(board, word, x, y + 1, k + 1, xLen, yLen) ||
        findFun(board, word, x + 1, y, k + 1, xLen, yLen) ||
        findFun(board, word, x, y - 1, k + 1, xLen, yLen); //上 右 下 左
    board[x][y] = temp;
    return res;
};
