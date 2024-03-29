/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    const helper = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd || inStart > inEnd) return null;
        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        const mid = map.get(rootVal);
        const leftTreeLength = mid - inStart;
        root.left = helper(
            preStart + 1,
            preStart + leftTreeLength,
            inStart,
            mid - 1
        );
        root.right = helper(
            preStart + leftTreeLength + 1,
            preEnd,
            mid + 1,
            inEnd
        );
        return root;
    };
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
