/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return initTreeNodes(nums, 0, nums.length - 1);
};

const initTreeNodes = (arr, start, end) => {
    // if (start <= end) {
    //     const mid = start + parseInt((end - start) / 2, 10);
    //     const root = new TreeNode(arr[mid]);
    //     root.left = initTreeNodes(arr, mid - 1, start);
    //     root.right = initTreeNodes(arr, end, mid + 1);
    //     return root;
    // } else {
    //     return null;
    // }
    if (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const root = new TreeNode(arr[mid]);
        root.left = initTreeNodes(arr, start, mid - 1);
        root.right = initTreeNodes(arr, mid + 1, end);
        return root;
    } else {
        return null;
    }
};
// @lc code=end
