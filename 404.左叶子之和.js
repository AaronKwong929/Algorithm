/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (57.67%)
 * Likes:    321
 * Dislikes: 0
 * Total Accepted:    87.1K
 * Total Submissions: 150.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 *
 * 示例：
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 *
 *
 *
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    // // 递归
    //   let res = 0;
    //   const helper = node => {
    //       if (!node) return;
    //       if (node.left && !node.left.left && !node.left.right) {
    //           res += node.left.val;
    //       }
    //       helper(node.left);
    //       helper(node.right);
    //   };
    //   helper(root);
    //   return res;

    // BFS
    if (!root) return 0;
    const queue = [root];
    let res = 0;
    while (queue.length) {
        const cur = queue.shift();
        if (cur.left && !cur.left.left && !cur.left.right) res += cur.left.val;
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }
    return res;
};
// @lc code=end
