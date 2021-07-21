/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (73.82%)
 * Likes:    943
 * Dislikes: 0
 * Total Accepted:    137.1K
 * Total Submissions: 185.8K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 *
 *
 *
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[["Q"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const board = new Array(n).fill([]).map(() => new Array(n).fill(`.`));
    // const board = new Array(n).fill(new Array(n).fill(`.`)); // 不要用这种，这种是浅拷贝
    const res = [];
    const helper = row => {
        if (row === board.length) {
            res.push(transformBoard(board));
            return;
        }
        const len = board.length;
        for (let col = 0; col < len; col++) {
            if (isValid(row, col)) {
                board[row][col] = `Q`;
                helper(row + 1);
                board[row][col] = `.`;
            }
        }
    };
    const transformBoard = board => {
        const res = [];
        board.forEach(row => {
            let rowStr = ``;
            row.forEach(value => {
                rowStr += value;
            });
            res.push(rowStr);
        });
        return res;
    };

    const isValid = (row, col) => {
        const len = board.length;
        for (let i = 0; i < len; i++) {
            if (board[i][col] === `Q`) return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === `Q`) return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
            if (board[i][j] === `Q`) return false;
        }
        return true;
    };
    helper(0);
    return res;
};
// @lc code=end
console.log(solveNQueens(8));
