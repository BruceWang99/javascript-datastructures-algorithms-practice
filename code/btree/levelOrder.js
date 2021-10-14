/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  // 借助队列的数据结构, 先入先出
  const queue = []; const result = [];
  if (!root) return result; // 临界情况
  queue.push(root); // 初始第一层的队列
  while (queue.length > 0) { // 每一层的循环
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i++) { // 一层的每个节点的遍历
      const node = queue.shift(); // 队列中取一个元素出来
      level.push(node.val);
      if (node.left) queue.push(node.left); // 左节点存在, 放到队列后面
      if (node.left) queue.push(node.left); // 右节点存在, 放到队列后面
    }
    result.push(level);
  }
  return result;
};
export default levelOrder;
