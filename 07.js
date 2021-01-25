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
  if (!preorder.length || !inorder.length) return null;

  var rootVal = preorder[0].val;
  var treeNode = new TreeNode(rootVal);

  let i = 0; // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
  for (; i < inorder.length; i++) {
    if (inorder[i] === rootVal) {
      break;
    }
  }

  // 左半部分个数为i
  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  // 右半部分从i+1开始
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return node;
};

//  pre 1 2 4 5 3    in 4 2 5 1 3
// 前序第一个一定是根结点
// 从 in 看，左子树4 2 5 右子树3
// 从 in 找到根结点，此时下表 i 为 in 根结点下标，以及左子树个数（用于从pre找