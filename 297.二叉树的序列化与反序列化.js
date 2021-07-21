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
        helper(node.left);
        helper(node.right);
        res.push(node.val);
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
    // if (data.length === 0) return null;
    // const helper = () => {
    //     const val = data.shift();
    //     if (val === null) return null;
    //     const node = new TreeNode(val);
    //     node.left = helper();
    //     node.right = helper();
    //     return node;
    // };

    // return helper();
    if (data.length === 0) return null;
    const helper = () => {
        const val = data.pop();
        if (val === null) return null;
        const root = new TreeNode(val);
        root.right = helper();
        root.left = helper();

        return root;
    };
    return helper();
};

// /**
//  * Your functions will be called as such:
//  * deserialize(serialize(root));
//  */
// @lc code=end

/**
 * 思路：前序遍历
 *
 * 序列化遇到null时往res push null
 *
 * 反序列化时因为前序遍历数组有存null位置
 */

/**
 * 其他思路：
 *
 * 后续遍历
 * 序列化差别不大
 * 反序列化需要注意是从末尾开始取元素
 * 先构造右子树，再构造左子树
 * 
 * 中序：无法实现
 * 
 * 层序：懒得想
 */
