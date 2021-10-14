/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // 递归
//   if (!root) return 0;
//   let result = 1;
//   function findMaxDepth(node, level) {
//     if (!node) return;
//     level++;
//     result = Math.max(level, result);
//     findMaxDepth(node.left, level);
//     findMaxDepth(node.right, level);
//   }
//   findMaxDepth(root, 0);
//   return result;
  // 递归优化 深度优先算法
//   if (!root) return 0;
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  // 广度优先算法, 借助队列
  if (!root) return 0;
  const queue = [];
  let d = 0;
  queue.push(root);// 初始化
  while (queue.length > 0) {
    const len = queue.length; // 每一层有多少个节点
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    d++;
  }
  return d;
};
export default maxDepth;
