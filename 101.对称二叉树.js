/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    return symmetric(root.left, root.right);
};

const symmetric = (left, right) => {
    if (!left) return !right;
    if (!right) return !left;
    if (left.val !== right.val) return false;
    return (
        symmetric(left.left, right.right) && symmetric(right.left, left.right)
    );
};
// @lc code=end
