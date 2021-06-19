/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (74.58%)
 * Likes:    609
 * Dislikes: 0
 * Total Accepted:    244.2K
 * Total Submissions: 327.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [3,2,1]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    // const res = [];
    // const post = root => {
    //     if (!root) return;
    //     post(root.left);
    //     post(root.right);
    //     res.push(root.val);
    // };
    // post(root);
    // return res;
    const reverse = array => {
        let res = [];
        for (let i = array.length - 1; i >= 0; i--) {
            res.push(array[i]);
        }
        return res;
    };
    if (!root) return [];
    const stack = [root],
        res = [];
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return reverse(res);
};
// @lc code=end
