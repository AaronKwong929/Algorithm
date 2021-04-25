/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
    const levels = [];
    if (!root) return levels;

    const helper = (node, level) => {
        if (levels.length === level) {
            levels.push([]);
        }

        levels[level].push(node.val);

        if (node.left) helper(node.left, level + 1);
        if (node.right) helper(node.right, level + 1);
    };

    helper(root, 0);

    return levels;
};
// @lc code=end
