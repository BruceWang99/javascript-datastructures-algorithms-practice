/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  inorderTraversalNode(root, result);
  return result;
};
function inorderTraversalNode(node, result) {
  if (node === null) return;
  inorderTraversalNode(node.left, result);
  result.push(node.val);
  inorderTraversalNode(node.right, result);
}
export default inorderTraversal;
