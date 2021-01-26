// const findNumberIn2DArray = (matrix, target) => {
//     const targetList = matrix.flat();
//     return targetList.indexOf(target) > -1;
// };

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = (matrix, target) => {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const rows = matrix.length,
        cols = matrix[0].length;

    let row = 0,
        col = cols - 1,
        num = null;
    while (row < rows && col >= 0) {
        num = matrix[row][col];
        if (num === target) return true;
        else if (num > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
};

console.log(
    findNumberIn2DArray(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ],
        20
    )
);
