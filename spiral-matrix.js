/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let currentNum = 1,
        final = n * n;
    const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ], // 右下左上
        matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let row = 0,
        column = 0,
        directionIndex = 0;
    while (currentNum <= final) {
        matrix[row][column] = currentNum;
        currentNum++;
        const nextRow = row + directions[directionIndex][0],
            nextColumn = column + directions[directionIndex][1];
        if (
            nextRow < 0 ||
            nextRow >= n ||
            nextColumn < 0 ||
            nextColumn >= n ||
            matrix[nextRow][nextColumn] !== 0
        ) {
            directionIndex = (directionIndex + 1) % 4; // 顺时针旋转至下一个方向
        }
        row = row + directions[directionIndex][0];
        column = column + directions[directionIndex][1];
    }

    return matrix;
};
// console.log(generateMatrix(3));
console.log(5 % 4);
