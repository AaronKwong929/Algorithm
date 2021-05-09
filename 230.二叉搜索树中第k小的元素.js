/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    // 中序遍历二叉搜索树就是从小到大排列的值
    const res = [],
        inorder = root => {
            // 当已经找到 k 个元素时提前中止遍历
            if (res.length >= k) return;
            if (root.left) inorder(root.left);
            res.push(root.val);
            if (root.right) inorder(root.right);
        };
    inorder(root);
    return res[k - 1];
};
// @lc code=end
