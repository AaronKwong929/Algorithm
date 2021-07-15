/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (34.40%)
 * Likes:    1103
 * Dislikes: 0
 * Total Accepted:    289.1K
 * Total Submissions: 839.5K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 假设一个二叉搜索树具有如下特征：
 *
 *
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 示例 1:
 *
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    // if (!root) return false;
    // const res = [];
    // const helper = root => {
    //     if (!root) return;
    //     helper(root.left);
    //     res.push(root.val);
    //     helper(root.right);
    // };
    // helper(root);
    // for (let i = 1; i < res.length; i++) {
    //     if (res[i - 1] < res[i]) continue;
    //     else return false;
    // }
    // return true;
    const helper = (root, min, max) => {
        if (!root) return true;
        if (min && root.val <= min.val) return false;
        if (max && root.val >= max.val) return false;
        return helper(root.left, min, root) && helper(root.right, root, max);
    };
    return helper(root, null, null);
};
// @lc code=end

/**
 * 个人思路
 * bst 中序遍历 数组接收
 * 验证数组是否递增
 */

/**
 * 优化思路
 * 递归
 * 注意：左子树每一个节点必比根节点小，右子树必比根节点大，传两个辅助参数
 * 判断左子树必须比根节点小，右子树必须比根节点大
 */
