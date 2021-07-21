/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode-cn.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Medium (77.72%)
 * Likes:    506
 * Dislikes: 0
 * Total Accepted:    103.4K
 * Total Submissions: 133K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 *
 * 完全二叉树
 * 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h
 * 层，则该层包含 1~ 2^h 个节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,4,5,6]
 * 输出：6
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：0
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目范围是[0, 5 * 10^4]
 * 0
 * 题目数据保证输入的树是 完全二叉树
 *
 *
 *
 *
 * 进阶：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？
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
var countNodes = function (root) {
    // if (!root) return 0;
    // return 1 + countNodes(root.left) + countNodes(root.right);
    let left = root,
        right = root;
    let hl = 0,
        hr = 0;
    while (left) {
        left = left.left;
        hl++;
    }
    while (right) {
        right = right.right;
        hr++;
    }
    if (hl === hr) {
        return Math.pow(2, hl) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end

/**
 * 个人思路：直接递归
 */

/**
 * 优化思路：
 * 完美二叉树/满二叉树：要么没叶子节点，要么都有俩叶子节点
 * 
 * 完全二叉树：每一层的结点都靠左排列（可能最底层不满）
 * 至少会有一颗完美（满）二叉树
 * 
 * 满二叉树的结点数是 Math.pow(2, h) - 1，h为树的高度
 * 
 */