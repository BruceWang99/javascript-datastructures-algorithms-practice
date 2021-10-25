/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  // 迭代法
  //   let result = root;
  //   while (root !== null) {
  //     if (val < root.val) {
  //       if (!root.left) {
  //         root.left = new TreeNode(val);
  //         root = null;
  //       } else {
  //         root = root.left;
  //       }
  //     } else {
  //       if (!root.right) {
  //         root.right = new TreeNode(val);
  //         root = null;
  //       } else {
  //         root = root.right;
  //       }
  //     }
  //   }
  //   if (!result) result = new TreeNode(val);
  //   return result;
  // 递归法
  //   function insert(node) {
  //     if (node !== null) {
  //       if (val > node.val) {
  //         if (!node.right) {
  //           node.right = new TreeNode(val);
  //         } else {
  //           insert(node.right);
  //         }
  //       } else {
  //         if (!node.left) {
  //           node.left = new TreeNode(val);
  //         } else {
  //           insert(node.left);
  //         }
  //       }
  //     }
  //   }
  //   insert(root);
  // 递归优化
  function insert(root) {
    if (root === null) {
      const node = new TreeNode(val);
      return node;
    }
    if (val > root.val) {
      root.right = insert(root.right);
    } else {
      root.left = insert(root.left);
    }
  }
  return insert(root);
};
export default insertIntoBST;
