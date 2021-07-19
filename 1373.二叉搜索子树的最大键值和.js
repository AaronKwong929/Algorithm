/*
 * @lc app=leetcode.cn id=1373 lang=javascript
 *
 * [1373] 二叉搜索子树的最大键值和
 *
 * https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/description/
 *
 * algorithms
 * Hard (39.11%)
 * Likes:    51
 * Dislikes: 0
 * Total Accepted:    5.6K
 * Total Submissions: 14.3K
 * Testcase Example:  '[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]'
 *
 * 给你一棵以 root 为根的 二叉树 ，请你返回 任意 二叉搜索子树的最大键值和。
 *
 * 二叉搜索树的定义如下：
 *
 *
 * 任意节点的左子树中的键值都 小于 此节点的键值。
 * 任意节点的右子树中的键值都 大于 此节点的键值。
 * 任意节点的左子树和右子树都是二叉搜索树。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
 * 输出：20
 * 解释：键值为 3 的子树是和最大的二叉搜索树。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root = [4,3,null,1,2]
 * 输出：2
 * 解释：键值为 2 的单节点子树是和最大的二叉搜索树。
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [-4,-2,-5]
 * 输出：0
 * 解释：所有节点键值都为负数，和最大的二叉搜索树为空。
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = [2,1,3]
 * 输出：6
 *
 *
 * 示例 5：
 *
 *
 * 输入：root = [5,4,8,3,null,6,3]
 * 输出：7
 *
 *
 *
 *
 * 提示：
 *
 *
 * 每棵树有 1 到 40000 个节点。
 * 每个节点的键值在 [-4 * 10^4 , 4 * 10^4] 之间。
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
var maxSumBST = function (root) {
    let max = 0;
    const helper = node => {
        // 空树可看作是BST
        if (!node)
            return [true, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];
        // 后续遍历，通过左右子树推导当前节点是不是BST
        const left = helper(node.left);
        const right = helper(node.right);

        const res = [];
        // 左右子树都是BST，当前节点值比左子树节点都大，比右子树节点都小，是BST
        if (left[0] && right[0] && node.val > left[2] && node.val < right[1]) {
            res[0] = true;
            // 当前节点为BST的最小值
            res[1] = Math.min(left[1], node.val);
            // 当前节点为BST的最大值
            res[2] = Math.max(right[2], node.val);
            // 以当前节点为根的BST的累加值
            res[3] = left[3] + right[3] + node.val;
            // 比对最大值
            max = Math.max(max, res[3]);
        } else res[0] = false;
        // 非BST不用计算
        return res;
    };
    helper(root);
    return max;
};
// @lc code=end

/**
 * 个人思路
 * 遍历节点 判断这个节点是不是二叉树
 * 如果是的话求出树总值，存入maxSum
 * 返回maxSum
 *
 *
 * 求值和遍历分别都是递归，递归嵌套递归，时间爆炸
 */

/**
 * 优化思路（答案）
 * 后序遍历减少多嵌套递归
 * res [node为根的树是否是bst， node为根的bst的所有节点中的最小值， node为根的bst的所有节点的最大值， node为根的bst的所有节点和]
 */
