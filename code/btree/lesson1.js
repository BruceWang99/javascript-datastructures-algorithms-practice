// 二叉树的节点
class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
}
// 二叉树
class Tree {
  constructor (data) {
    // 临时存储所有节点, 方便寻找父子节点
    const nodeList = [];
    for (let i = 0, len = data.length; i < len; i++) {
      const node = new Node(data[i]); // 数组中的每一项,变成二叉树节点
      nodeList.push(node);
      if (i > 0) { // 如果不是顶节点 (顶节点没有父节点)
        // 计算当前节点是哪一层
        const n = Math.floor(Math.sqrt(i + 1)); // 把第n个数(索引+1)开平方向下取整就是层数(sqrt 返回一个数的平方根)
        // 记录当前层的起始点
        const q = Math.pow(2, n) - 1;
        // 上一层的起始点
        const p = Math.pow(2, n - 1) - 1;
        // 找到当前节点的父节点
        const parent = nodeList[p + Math.ceil((i - q + 1) / 2) - 1];
        // 将当前节点和父节点做关联
        if (parent.left) {
          parent.right = node;
        } else {
          parent.left = node;
        }
      }
    }
    // 顶节点,数组的第一位
    const root = nodeList.shift();
    nodeList.length = 0;
    return root;
  }
  static isSymmetry (root) {
    if (!root) {
      return true;
    }
    const walk = (left, right) => {
      // 左右节点都是undefined
      if (!left && !right) {
        return true;
      }
      // 有一个左节点没有右节点 或者 没有左节点有右节点 或者左边值不等于右边值
      if ((left && !right) || (!left && right) || (left.val !== right.val)) {
        return false;
      }
      // 递归下一层 左节点的左子节点和右节点的右子节点和左节点的右子节点和右节点的左子节点
      return walk(left.left, right.right) && walk(left.right, right.left);
    };
    return walk(root.left, root.right);
  }
}
export default Tree;
export {
  Node
};
