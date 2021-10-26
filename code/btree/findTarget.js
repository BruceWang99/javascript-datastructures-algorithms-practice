var findTarget = function(root, k) {
  // 迭代法
  function inOrder(node, callback) {
    if (node !== null) {
      inOrder(node.left, callback);
      callback(node);
      inOrder(node.right, callback);
    }
  }
  const list = [];
  inOrder(root, (node) => {
    list.push(node.val);
  });
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] + list[j] === k) return true;
    }
  }
  return false;
};
export default findTarget;
