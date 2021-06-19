/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 *
 * https://leetcode-cn.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (62.36%)
 * Likes:    507
 * Dislikes: 0
 * Total Accepted:    146.4K
 * Total Submissions: 234.8K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 *
 * 叶子节点 是指没有子节点的节点。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,2], targetSum = 0
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点总数在范围 [0, 5000] 内
 * -1000
 * -1000
 *
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    // const res = [];
    // const dfs = (root, sum, path) => {
    //     if (!root) return;
    //     path.push(root.val);
    //     sum -= root.val;
    //     if (!root.left && !root.right && sum === 0) {
    //         res.push(path.slice());
    //     } else {
    //         dfs(root.left, sum, path);
    //         dfs(root.right, sum, path);
    //     }
    //     path.pop();
    // };
    // dfs(root, targetSum, []);
    // return res;
    const res = [];
    const dfs = (root, sum, path) => {
        if (!root) return;
        sum -= root.val;
        path.push(root.val);
        if (!root.left && !root.right && sum === 0) {
            res.push(path.slice());
            return;
        }
        dfs(root.left, sum, path.slice());
        dfs(root.right, sum, path.slice());
    };
    dfs(root, targetSum, []);
    return res;
};
// @lc code=end

console.log(
    pathSum(
        {
            val: 5,
            left: {
                val: 4,
                left: { val: 11, left: { val: 7 }, right: { val: 2 } },
                right: null,
            },
            right: {
                val: 8,
                left: { val: 13 },
                right: { val: 4, left: { val: 5 }, right: { val: 1 } },
            },
        },
        22
    )
);
