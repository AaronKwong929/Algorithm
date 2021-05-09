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
    const res = [];
    if (!root) return res;

    const helper = (root, level) => {
        if (res.length === level) res.push([]);
        res[level].push(root.val);
        if (root.left) helper(root.left, level + 1);
        if (root.right) helper(root.right, level + 1);
    };

    helper(root, 0);
    return res;
};
// @lc code=end
