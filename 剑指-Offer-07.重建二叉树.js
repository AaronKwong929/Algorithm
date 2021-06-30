/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    const helper = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd || inStart > inEnd) return null;
        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        const mid = map.get(rootVal);
        const length = mid - inStart;
        root.left = helper(preStart + 1, preStart + length, inStart, mid - 1);
        root.right = helper(preStart + length + 1, preEnd, mid + 1, inEnd);
        return root;
    };
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
