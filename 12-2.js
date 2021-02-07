/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const xLen = board.length,
        yLen = board[0].length,
        k = 0;

    const find = (board, word, x, y, k) => {
        if (x < 0 || x >= xLen || y < 0 || y >= yLen || board[x][y] !== word[k])
            return false;
        if (k === word.length - 1) return true; // 匹配到了最后一个
        const temp = board[x][y];
        board[x][y] = `-`;
        const res =
            find(board, word, x + 1, y, k + 1, xLen, yLen) ||
            find(board, word, x - 1, y, k + 1, xLen, yLen) ||
            find(board, word, x, y + 1, k + 1, xLen, yLen) ||
            find(board, word, x, y - 1, k + 1, xLen, yLen);
        board[x][y] = temp;
        return res;
    };

    for (let x = 0; x < xLen; x++) {
        for (let y = 0; y < yLen; y++) {
            if (find(board, word, x, y, k)) return true;
        }
    }
    return false;
};
