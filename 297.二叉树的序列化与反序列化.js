/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const res = [];
    const helper = node => {
        if (node === null) {
            res.push(null);
            return;
        }
        res.push(node.val);
        helper(node.left);
        helper(node.right);
    };
    helper(root);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) return null;
    const helper = () => {
        const val = data.shift();
        if (val === null) return null;
        const node = new TreeNode(val);
        node.left = helper();
        node.right = helper();
        return node;
    };

    return helper();
};

// /**
//  * Your functions will be called as such:
//  * deserialize(serialize(root));
//  */
// @lc code=end
