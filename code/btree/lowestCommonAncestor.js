var lowestCommonAncestor = function(root, p, q) {
  // 思路1: 找到p,q分别的所有祖先元素, 从后往前遍历比较p, q的祖先元素, 第一个相等的元素, 就是q,p的最近公共祖先
  // 递归找所有祖先
//   function find(node, x, callback) {
//     if (node !== null) {
//       callback(node);
//       if (x < node.val) {
//         find(node.left, x, callback);
//       }
//       if (x > node.val) {
//         find(node.right, x, callback);
//       }
//     }
//   }
//   const pList = []; let result = null;
//   find(root, p.val, function(node) {
//     pList.push(node);
//   });
//   let i = 0;
//   find(root, q.val, function(node) {
//     if (i < pList.length && pList[i].val === node.val) {
//       result = node;
//     }
//     i++;
//   });
//   return result;

  // 遍历法
  // 遍历法
  let pRoot = root;
  let qRoot = root;
  let result = null;
  while (pRoot || qRoot) {
    if (pRoot && qRoot && pRoot.val === qRoot.val) {
      result = pRoot;
    }
    pRoot = pRoot && p.val < pRoot.val ? pRoot.left : pRoot && p.val > pRoot.val ? pRoot.right : null;
    qRoot = qRoot && q.val < qRoot.val ? qRoot.left : qRoot && q.val > qRoot.val ? qRoot.right : null;
  }
  return result;
};
export default lowestCommonAncestor;
