/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 *
 * https://leetcode-cn.com/problems/merge-two-binary-trees/description/
 *
 * algorithms
 * Easy (78.81%)
 * Likes:    717
 * Dislikes: 0
 * Total Accepted:    156.4K
 * Total Submissions: 198.5K
 * Testcase Example:  '[1,3,2,5]\n[2,1,3,null,4,null,7]'
 *
 * 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
 *
 * 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL
 * 的节点将直接作为新二叉树的节点。
 *
 * 示例 1:
 *
 *
 * 输入:
 * Tree 1                     Tree 2
 * ⁠         1                         2
 * ⁠        / \                       / \
 * ⁠       3   2                     1   3
 * ⁠      /                           \   \
 * ⁠     5                             4   7
 * 输出:
 * 合并后的树:
 * 3
 * / \
 * 4   5
 * / \   \
 * 5   4   7
 *
 *
 * 注意: 合并必须从两个树的根节点开始。
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    // // 递归 - dfs
    // if (!root1) return root2;
    // if (!root2) return root1;
    // const res = new TreeNode(root1.val + root2.val);
    // res.left = mergeTrees(root1.left, root2.left);
    // res.right = mergeTrees(root1.right, root2.right);
    // return res;
    // BFS
    if (!root1) return root2;
    if (!root2) return root1;
    const res = new TreeNode(root1.val + root2.val);
    const queue1 = [root1],
        queue2 = [root2],
        queue3 = [res];
    while (queue1.length && queue2.length) {
        const cur1 = queue1.shift(),
            cur2 = queue2.shift(),
            cur3 = queue3.shift();

        const left1 = cur1.left,
            right1 = cur1.right,
            left2 = cur2.left,
            right2 = cur2.right;

        if (left1 || left2) {
            if (left1 && left2) {
                cur3.left = new TreeNode(left1.val + left2.val);
                queue1.push(cur1.left);
                queue2.push(cur2.left);
                queue3.push(cur3.left);
            } else if (left1 && !left2) cur3.left = left1;
            else cur3.left = left2;
        }

        if (right1 || right2) {
            if (right1 && right2) {
                cur3.right = new TreeNode(right1.val + right2.val);
                queue1.push(cur1.right);
                queue2.push(cur2.right);
                queue3.push(cur3.right);
            } else if (right1 && !right2) cur3.right = right1;
            else cur3.right = right2;
        }
	}
	return res;
};
// @lc code=end
