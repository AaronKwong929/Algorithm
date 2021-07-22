/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 *
 * https://leetcode-cn.com/problems/transpose-matrix/description/
 *
 * algorithms
 * Easy (67.11%)
 * Likes:    200
 * Dislikes: 0
 * Total Accepted:    81.8K
 * Total Submissions: 122K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
 *
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[1,4,7],[2,5,8],[3,6,9]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6]]
 * 输出：[[1,4],[2,5],[3,6]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * 1
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    const { length: colLen } = matrix;
    const rowLen = matrix[0].length;
    const transposed = new Array(rowLen)
        .fill(0)
        .map(() => new Array(colLen).fill(0));
    for (let i = 0; i < colLen; i++) {
        for (let j = 0; j < rowLen; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
};
// @lc code=end
/**
 * 不能原地修改
 * 因为题目给的矩阵可能是2行3列 转3行2列
 * 重新构建行列数组
 */