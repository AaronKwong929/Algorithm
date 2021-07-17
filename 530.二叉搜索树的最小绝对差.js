/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 *
 * https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (61.92%)
 * Likes:    259
 * Dislikes: 0
 * Total Accepted:    69.8K
 * Total Submissions: 112.8K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 *
 *
 *
 * 示例：
 *
 * 输入：
 *
 * ⁠  1
 * ⁠   \
 * ⁠    3
 * ⁠   /
 * ⁠  2
 *
 * 输出：
 * 1
 *
 * 解释：
 * 最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中至少有 2 个节点。
 * 本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
 * 相同
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let res = Number.MAX_SAFE_INTEGER;
    let pre = -1;
    const dfs = root => {
        if (!root) return;
        dfs(root.left);
        if (pre === -1) pre = root.val;
        else {
            res = Math.min(res, root.val - pre);
            pre = root.val;
        }
        dfs(root.right);
    };
    dfs(root);
    return res;
};
// @lc code=end
