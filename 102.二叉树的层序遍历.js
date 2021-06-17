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
    const helper = (root, i) => {
        if (!res[i]) res[i] = [];
        res[i].push(root.val);
        if (root.left) helper(root.left, i + 1);
        if (root.right) helper(root.right, i + 1);
    };
    helper(root, 0);
    return res;
};
// @lc code=end
