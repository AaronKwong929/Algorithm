/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 *
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/description/
 *
 * algorithms
 * Medium (56.90%)
 * Likes:    288
 * Dislikes: 0
 * Total Accepted:    27.2K
 * Total Submissions: 47.9K
 * Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
 *
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 *
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 *
 * 示例 1：
 *
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3
 * ⁠    /   / \
 * ⁠   4   2   4
 * ⁠      /
 * ⁠     4
 *
 *
 * 下面是两个重复的子树：
 *
 * ⁠     2
 * ⁠    /
 * ⁠   4
 *
 *
 * 和
 *
 * ⁠   4
 *
 *
 * 因此，你需要以列表的形式返回上述重复子树的根结点。
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    const map = new Map();
    const res = [];
    const helper = root => {
        if (!root) return `#`;
        const left = helper(root.left);
        const right = helper(root.right);
        const val = `${left},${right},${root.val}`;
        if (!map.get(val)) map.set(val, 1);
        else {
            if (map.get(val) === 1) res.push(root);
            map.set(val, map.get(val) + 1);
        }
        return val;
    };
    helper(root);
    return res;
};
// @lc code=end

// https://mp.weixin.qq.com/s/LJbpo49qppIeRs-FbgjsSQ
// 要知道以某个节点为根的子树长什么样 =====> 后序遍历
// 结果去重
