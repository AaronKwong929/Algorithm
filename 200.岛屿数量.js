/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */


// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let num = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === `1`) {
                num++;
                spread(grid, i, j);
            }
        }
    }
    return num;
};
/**
 * @param {character[][]} grid
 * @return
 */
const spread = (grid, i, j) => {
    if (
        i < 0 ||
        j < 0 ||
        i >= grid.length ||
        j >= grid[0].length ||
        grid[i][j] === `0`
    )
        return;
    grid[i][j] = `0`;
    spread(grid, i - 1, j);
    spread(grid, i + 1, j);
    spread(grid, i, j - 1);
    spread(grid, i, j + 1);
};
// @lc code=end

// [0, 0]开始，如果是陆地就要往四个方向扩散找连续陆地置零