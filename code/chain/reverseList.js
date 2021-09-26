// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
var reverseList = function(head) {
  // 思路1: 迭代, 反转后的链表可以从后一直往前接
  let lastNode = null;
  let cNode = null;
  while (head) {
    if (!lastNode) {
      lastNode = new ListNode(head.val); // 最后一个节点没有next
    } else {
      cNode = new ListNode(head.val);
      cNode.next = lastNode; // 当前节点next是上一个节点
      lastNode = cNode; // 更换上一个节点
    }
    head = head.next;
  }
  return lastNode;
};
export default reverseList;
