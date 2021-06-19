/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // const res = [];
    // if (!root) return res;
    // const inorder = ({ val, left, right }) => {
    //     left && inorder(left);
    //     val && res.push(val);
    //     right && inorder(right);
    // };

    // inorder(root);
    // return res;
    const stack = [],
        res = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right
    }
    return res;
};
// @lc code=end
