/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    const helper = (inStart, inEnd, postStart, postEnd) => {
        if (inStart > inEnd || postStart > postEnd) return null;
        const rootVal = postorder[postEnd];
        const root = new TreeNode(rootVal);
        const mid = map.get(rootVal);
        const leftTreeLength = mid - inStart;
        root.left = helper(
            inStart,
            mid - 1,
            postStart,
            postStart + leftTreeLength - 1
        );
        root.right = helper(
            mid + 1,
            inEnd,
            postStart + leftTreeLength,
            postEnd - 1
        );
        return root;
    };
    return helper(0, inorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end
