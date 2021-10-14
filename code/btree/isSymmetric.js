var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  // 广度遍历 借助队列
  const queue = [];
  // 初始化两个节点
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length > 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const leftNode = queue.shift();
      const rightNode = queue.shift();
      if (leftNode && rightNode && leftNode.val !== rightNode.val) {
        return false;
      }
      if (!leftNode && rightNode || leftNode && !rightNode) {
        return false;
      }
      queue.push(leftNode.left);
      queue.push(rightNode.right);
      queue.push(leftNode.right);
      queue.push(rightNode.left);
    }
  }
  return true;
};
export default isSymmetric;
