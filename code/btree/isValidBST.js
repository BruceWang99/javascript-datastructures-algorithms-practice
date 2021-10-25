var isValidBST = function(root) {
  // 中序遍历
  let pre = null;
  function inOrder(node, callback) {
    if (node === null) return true;
    const left = inOrder(node.left, callback);
    if (!callback(node)) return false;
    const right = inOrder(node.right, callback);
    return left && right;
  }
  return inOrder(root, function(node) {
	  if (pre !== null && node.val <= pre) {
      	return false;
	  }
	  pre = node.val;
	  return true;
  });
};
export default isValidBST;
