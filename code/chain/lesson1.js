// 申明链表的节点
class Node {
  constructor(value) {
    this.val = value;
    this.next = undefined;
  }
}
// 申明链表的数据结构
class NodeList {
  constructor (arr) {
    // 申明链表的头部节点
    const head = new Node(arr.shift());
    let next = head;
    arr.forEach(item => {
      next.next = new Node(item);
      next = next.next;
    });
    return head;
  }
}
// 交换两个节点的值
const swap = (p, q) => {
  const val = p.val;
  p.val = q.val;
  q.val = val;
};
// 寻找基准元素的节点
const partion = (begin, end) => {
  const val = begin.val;
  let p = begin; // 指针1
  let q = begin.next; // 指针2
  while (q !== end) { // 如果指针2不是最后的节点
    if (q.val < val) { // 下一个节点小于基准点, 交换节点
      p = p.next; // p朝后移动一位
      swap(p, q); // 大小互换, p的左边小于基准, 右边大于基准
    }
    q = q.next; // q朝后移动一位
  }
  // 基准元素放中间
  swap(p, begin);
  return p;
};
export default function sort (begin, end) {
  if (begin !== end) {
    const part = partion(begin, end); // 找基准元素
    sort(begin, part); // 递归左侧
    sort(part.next, end);// 递归右侧
  }
}
export {
  Node,
  NodeList
};
