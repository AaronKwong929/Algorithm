/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    return constructNewNode(
        preorder,
        inorder,
        0,
        preorder.length,
        0,
        inorder.length
    );
};

function findInorderIndex(list, target) {
    if (list.length === 0) {
        return undefined;
    }
    let index;
    list.forEach((item, i) => {
        if (item === target) {
            index = i;
        }
    });
    return index;
}

function constructNewNode(
    preorder,
    inorder,
    preStart,
    preLength,
    inStart,
    inLength
) {
    // 前序列表第一个是树根节点
    const root = preorder[preStart];
    // 找到 root 在中序列表的位置，左边是左子树，右边是右子树
    const inOrderIndex = findInorderIndex(inorder, root);

    const rootNode = new TreeNode(root);
    // 存在左子树
    if (inOrderIndex - inStart >= 1) {
        rootNode.left = constructNewNode(
            preorder,
            inorder,
            preStart + 1, // 前序：左子树位置
            preStart + (inOrderIndex - inStart), // 前序：左子树长度
            inStart, // 中序：左子树起始位置
            inOrderIndex - 1 // 左子树的中序长度
            
        );
    }

    // 存在右子树
    if (inLength - inOrderIndex >= 1) {
        rootNode.right = constructNewNode(
            preorder,
            inorder
            // preStart + (inOrderIndex - inStart) + 1, // 右子树的先序起点
            // preLength, // 右子树的先序总长度
            // inOrderIndex + 1, // 右子树的中序起点
            // inLength // 右子树的中序长度
            
        );
    }
    return root || root === 0 ? rootNode : null;
}
// @lc code=end
