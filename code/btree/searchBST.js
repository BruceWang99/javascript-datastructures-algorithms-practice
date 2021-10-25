/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
//   const result = null;
  // 中序遍历
  //   function inOrderTravarseNode(node, callback) {
  //     if (node !== null && !result) {
  //       inOrderTravarseNode(node.left, callback);
  //       callback(node);
  //       inOrderTravarseNode(node.right, callback);
  //     }
  //   }
  // 先序遍历
  //   function preOrderTravarseNode(node, callback) {
  //     if (node !== null && !result) {
  //       callback(node);
  //       preOrderTravarseNode(node.left, callback);
  //       preOrderTravarseNode(node.right, callback);
  //     }
  //   }
  // 后序遍历
  //   function postOrderTravarseNode(node, callback) {
  //     if (node !== null && !result) {
  //       callback(node);
  //       postOrderTravarseNode(node.left, callback);
  //       postOrderTravarseNode(node.right, callback);
  //     }
  //   }
  //   postOrderTravarseNode(root, function(node) {
  //     if (node.val === val) {
  //       result = node;
  //     }
  //   });
  //   return result;
  // 迭代法
  while (root !== null) {
    if (root.val === val) {
      return root;
    } else if (root.val > val) {
      root = root.left;
    } else if (root.val < val) {
      root = root.right;
    }
  }
  return root;
};
export default searchBST;
