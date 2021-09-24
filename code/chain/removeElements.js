// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
var removeElements = function(head, val) {
  // 思路1, 递归
  // 当前Node的val === val就跳过这个node
  // 边界: head ===null
  function remove(head) {
    if (!head) return head;
    head.next = remove(head.next);
    return head.val === val ? head.next : head; // 相等时,返回下一个节点
  }
  return remove(head);
  // 思路2 迭代
//   let p = head;
//   let result = head;
//   while (p) {
//     if (p.val !== val) {
//       result = result.next = p;
//     }
//     p = p.next;
//   }
//   return result.next;
};

export default removeElements;
