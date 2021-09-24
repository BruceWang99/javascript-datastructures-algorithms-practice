// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  // 思路1, 迭代所有节点, 使用两个指针, 分别指向链表的初始节点. 每一次对比两个指针的大小, 把最小的放到新链表(初始节点使用一个伪节点,做开头)中, 然后指针后移一位
  // if (!l1) return l2;
  // if (!l2) return l1;

  // let pointer1 = l1; let pointer2 = l2;
  // const l3 = new ListNode();
  // let cnode = l3;
  // while (pointer1 !== null || pointer2 !== null) {
  //   if(pointer1 && pointer2) { // 两个指针都有值时
  //     if (pointer1.val <= pointer2.val) {
  //       cnode = cnode.next = pointer1; // 新链表向后移动一位
  //       pointer1 = pointer1.next; // 指针1向后移动一位
  //     } else {
  //         cnode = cnode.next = pointer2; // 新链表向后移动一位
  //         pointer2 = pointer2.next; // 指针2向后移动一位
  //     }
  //   } else if(!pointer1) {  // 指针一都有值时
  //     cnode = cnode.next = pointer2; // 新链表向后移动一位
  //     pointer2 = pointer2.next; // 指针2向后移动一位
  //   } else if(!pointer2) { // 指针二都有值时
  //     cnode = cnode.next = pointer1; // 新链表向后移动一位
  //     pointer1 = pointer1.next; // 指针1向后移动一位
  //   }
  // }
  // console.log('l3.next', JSON.stringify(l3.next));
  // return l3.next;
  // 思路2 递归
  // 子问题: 新链表 = l1[0] + merge(l1.next, l2) 或者 l2[0] + merge(l1, l2.next), 一次操作只找出一个最小的值, 找完,再到递归函数里找下一个最小的值, 直到全部找完、
  // 边界 l1 === null 或者 l2 === null 的时候
  function merge(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val <= l2.val) {
      l1.next = merge(l1.next, l2); // 一次找到一个最小的
      return l1; // 返回找到的那个最小的
    } else {
      l2.next = merge(l1, l2.next); // 一次找到一个最小的
      return l2; // 返回找到的那个最小的
    }
  }
  return merge(l1, l2);
};
export default mergeTwoLists;
