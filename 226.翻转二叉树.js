/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (78.55%)
 * Likes:    906
 * Dislikes: 0
 * Total Accepted:    257.4K
 * Total Submissions: 327.7K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 翻转一棵二叉树。
 *
 * 示例：
 *
 * 输入：
 *
 * ⁠    4
 * ⁠  /   \
 * ⁠ 2     7
 * ⁠/ \   / \
 * 1   3 6   9
 *
 * 输出：
 *
 * ⁠    4
 * ⁠  /   \
 * ⁠ 7     2
 * ⁠/ \   / \
 * 9   6 3   1
 *
 * 备注:
 * 这个问题是受到 Max Howell 的 原问题 启发的 ：
 *
 * 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // // 递归
    // if (root === null) {
    //     return null;
    // }
    // const left = invertTree(root.left);
    // const right = invertTree(root.right);
    // root.left = right;
    // root.right = left;
    // return root;

    // // BFS
    if (!root) return null;
    const queue = [root];
    while (queue.length) {
        const cur = queue.shift();
        [cur.left, cur.right] = [cur.right, cur.left];
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }
    return root;
};
// @lc code=end

// 每次取一个就行 不用嵌套for循环同层同时扩散
