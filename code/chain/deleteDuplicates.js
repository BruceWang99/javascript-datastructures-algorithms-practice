function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
var deleteDuplicates = function(head) {
  // 思路1 重复问题,想到哈希解法,用map set array, 存是否已经有这个的值了
  // 思路1.1 递归, 边界: head ===null, 子问题, 已经有这个值了,就跳过这个节点, 没有这个值,就先记录下来
  const set = new Set();
  //   function deleteDu(head) {
  //     if (!head) return head;
  //     head.next = delete (head.next);
  //     if (set.has(head.val)) {
  //       return head.next;
  //     } else {
  //       set.add(head.val);
  //       return head;
  //     }
  //   }
  //   return deleteDu(head);
  // 思路1.2 迭代 遍历所有的Node,加一个伪head, 一个指针
  let p = head;
  const head2 = new ListNode();
  const p2 = head2;
  while (p) {
    if (!set.has(p.val)) {
      set.add(p.val);
      p2.next = new ListNode(p.val);
    }
    p = p.next;
  }
  return head2.next;
};
const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

deleteDuplicates(head);
export default deleteDuplicates;
