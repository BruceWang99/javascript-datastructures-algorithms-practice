// 二叉树的节点
class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
}
// 搜索二叉树
class Tree {
  constructor (data) {
    const root = new Node(data.shift());
    // 遍历所有的数据, 放到树中
    data.forEach(item => {
      this.insert(root, item);
    });
    return root;
  }
  insert(node, data) {
    if (node.val > data) {
      if (node.left === undefined) {
        node.left = new Node(data);
      } else {
        this.insert(node.left, data);
      }
    } else {
      if (node.right === undefined) {
        node.right = new Node(data);
      } else {
        this.insert(node.right, data);
      }
    }
  }
  static walk (root) {
    if (!root.left && !root.right) {
      return true;
    } else if ((!root.right && root.left && root.val > root.left.val) || (!root.left && root.right && root.val < root.right.val)) {
      return true;
    } else if (root.left && root.val <= root.left.val || root.right && root.val >= root.right.val) {
      return false;
    } else {
      return Tree.walk(root.left) && Tree.walk(root.right);
    }
  }
}
export default Tree;
export {
  Node
};
