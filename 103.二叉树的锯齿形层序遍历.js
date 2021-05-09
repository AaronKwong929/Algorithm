/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
// 从第一层开始（level === 0，偶数 level & 1 = 0）左到右 -> push
// 第二层（level === 1，基数 level & 1 = 1） 右到左 -> unshift
var zigzagLevelOrder = function (root) {
    const res = [];
    dfs(0, root);
    return res;

    function dfs(level, node) {
        if (!node) return;
        if (!Array.isArray(res[level])) res[level] = [];
        // 
        level & 1 && res[level].unshift(node.val);
        !(level & 1) && res[level].push(node.val);
        dfs(level + 1, node.left);
        dfs(level + 1, node.right);
    }
};
// @lc code=end
