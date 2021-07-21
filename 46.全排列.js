/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (78.07%)
 * Likes:    1456
 * Dislikes: 0
 * Total Accepted:    363.2K
 * Total Submissions: 465.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10
 * nums 中的所有整数 互不相同
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const helper = (nums, path) => {
        // 终止条件，路径和输出数组同长度，已遍历完成
        if (path.length === nums.length) {
            res.push(path.slice());
        }
        for (const i of nums) {
            // 排除当前已经选择过的路径
            if (path.includes(i)) continue;
            // 选择路径
            path.push(i);
            // 递归
            helper(nums, path);
            // 取消选择路径 - 回溯
            path.pop();
        }
    };
    helper(nums, []);
    return res;
};
// @lc code=end
