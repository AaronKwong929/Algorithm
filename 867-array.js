// 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

// 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

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
