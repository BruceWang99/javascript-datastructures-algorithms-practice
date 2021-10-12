/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const result = [];
  postorderTraversalNode(root, result);
  return result;
};
function postorderTraversalNode(node, result) {
  if (node === null) return;
  postorderTraversalNode(node.left, result);
  postorderTraversalNode(node.right, result);
  result.push(node.val);
}
export default postorderTraversal;
