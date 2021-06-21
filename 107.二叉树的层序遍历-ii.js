/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Medium (69.06%)
 * Likes:    448
 * Dislikes: 0
 * Total Accepted:    146.2K
 * Total Submissions: 211.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层序遍历为：
 *
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return [];
    const reverse = array => {
        const { length } = array;
        for (let i = 0; i < Math.floor(length / 2); i++) {
            [array[i], array[length - i - 1]] = [
                array[length - 1 - i],
                array[i],
            ];
        }
        return array;
    };
    const res = [];
    const helper = (root, level) => {
        if (!res[level]) res[level] = [];
        res[level].push(root.val);
        root.left && helper(root.left, level + 1);
        root.right && helper(root.right, level + 1);
    };
    helper(root, 0);
    return reverse(res);
};
// @lc code=end
