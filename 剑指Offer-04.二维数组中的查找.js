/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix || !matrix[0]) return false;
    const { length: xLength } = matrix;
    const { length: yLength } = matrix[0];
    let row = 0,
        col = yLength - 1;
    while (col >= 0 && row < xLength) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }
    return false;
};

// 线性查找，从左下角/右上角开始都可以