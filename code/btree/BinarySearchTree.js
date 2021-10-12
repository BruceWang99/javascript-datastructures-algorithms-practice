class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) { // 插入节点
    const CompareValue = this.compareFn(key, node.key);
    if (CompareValue === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (CompareValue === Compare.BIGGER_THAN) {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) { // 递归的终止条件
      this.inOrderTraverseNode(node.left, callback);
      this.inOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(6);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode);
// console.log('tree', JSON.stringify(tree));
