/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
//  1、参数 node、上一次累加的和sum, 没有返回值
//  2、node为null的时候终止或者sum等于targetSum时
//  3、sum = sum + node.val
var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  function find(node, sum) {
    // 叶子结点, 没有左右节点的节点, 这个很重要
    if (sum === targetSum && !node.left && !node.right) return true;
    if (!node.left && !node.right) return false;
    if (node.left && find(node.left, sum + node.left.val)) return true;
    if (node.right && find(node.right, sum + node.right.val)) return true;
    return false;
  }
  return find(root, root.val);
};
export default hasPathSum;
