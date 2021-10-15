/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // 递归 深度优先算法
//   if (!root) return root;
//   const tmp = root.left;
//   root.left = invertTree(root.right);
//   root.right = invertTree(tmp);
//   return root;
  // 广度优先算法 借助队列
  if (!root) return root;
  const queue = [];
  // 队列初始化
  queue.push(root);
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      // 把左右子节点调换位置放到队列里面来
      queue.push(node.left);
      queue.push(node.right);
      // 把左右子节点调换位置
      const tmp = node.left;
      node.left = node.right;
      node.right = tmp;
    }
  }
  return root;
};
export default invertTree;
