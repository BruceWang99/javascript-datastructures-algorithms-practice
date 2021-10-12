/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];
  preorderTraversalNode(root, result);
  return result;
};
function preorderTraversalNode(node, result) {
  if (node === null) return;
  result.push(node.val);
  preorderTraversalNode(node.left, result);
  preorderTraversalNode(node.right, result);
}
export default preorderTraversal;
