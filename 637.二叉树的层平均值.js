/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 *
 * https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/description/
 *
 * algorithms
 * Easy (68.87%)
 * Likes:    270
 * Dislikes: 0
 * Total Accepted:    66.8K
 * Total Submissions: 97K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
 *
 *
 *
 * 示例 1：
 *
 * 输入：
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 输出：[3, 14.5, 11]
 * 解释：
 * 第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 节点值的范围在32位有符号整数范围内。
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
	const res = [];
	// // dfs
    // const helper = (node, level = 0) => {
    //     if (!node) return;
    //     if (!res[level]) res[level] = [];
    //     res[level].push(node.val);
    //     helper(node.left, level + 1);
    //     helper(node.right, level + 1);
    // };
    // helper(root);
	// // 层序遍历
    const queue = [root];
    while (queue.length) {
        const { length } = queue;
        const row = [];
        for (let i = 0; i < length; i++) {
            const cur = queue.shift();
            row.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        res.push(row);
    }
    return res.map(
        item => item.reduce((pre, cur) => pre + cur, 0) / item.length
    );
};
// @lc code=end
console.log(
    averageOfLevels({
        val: 3,
        left: { val: 9 },
        right: { val: 20, left: { val: 15 }, right: { val: 7 } },
    })
);
