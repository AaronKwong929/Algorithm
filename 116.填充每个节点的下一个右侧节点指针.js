/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return null;
    // 节点有左右子节点，连接 （类似题目2，3节点连接
    if (root.left && root.right) {
        root.left.next = root.right;
    }
    // （类似题目5，6节点连接
    if (root.right && root.next && root.next.left) {
        root.right.next = root.next.left;
    }
    connect(root.left);
    connect(root.right);
    return root;
};
// @lc code=end
