/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    // // 分解成中序遍历 + 二树之和
    // const set = new Set();
    // const arr = [];
    // const helper = root => {
    //     if (!root) return;
    //     helper(root.left);
    //     arr.push(root.val);
    //     helper(root.right);
    // };
    // helper(root);
    // for (let i = 0; i < arr.length; i++) {
    //     if (set.has(k - arr[i])) return true;
    //     else set.add(arr[i]);
    // }
    // return false;

    // // 递归
    // if (!root) return false;
    // const set = new Set();
    // const findTarget = (root, k, set) => {
    //     if (!root) return false;
    //     if (set.has(k - root.val)) return true;
    //     set.add(root.val);
    //     return findTarget(root.left, k, set) || findTarget(root.right, k, set);
    // };
    // return findTarget(root, k, set);

    // BFS
    if (!root) return false;
    const set = new Set();
    const queue = [root];
    while (queue.length) {
        const cur = queue.pop();
        if (set.has(k - cur.val)) return true;
        set.add(cur.val);
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }
    return false;
};
// @lc code=end
