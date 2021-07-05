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
export default function isCircle (head) {
  // 慢指针
  let slow = head;
  // 快指针
  let fast = head.next;
  while (1) {
    if (!fast || !fast.next) { // 链表只有一项或两项时, 不可能有环
      return false;
    } else if (fast === slow || fast.next === slow) { // 快的指针跑到慢指针后面了
      return true;
    } else {
      slow = slow.next; // 一次走一个节点
      fast = fast.next.next; // 一次走两个节点
    }
  }
}
export {
  Node,
  NodeList
};
