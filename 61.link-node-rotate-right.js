/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (k === 0 || !head || !head.next) return head;
    let p = head;
    let len = 0;
    let tail;

    while (p) {
        p = p.next;
        tail = p;
        len++;
    }
    k = len - (k % len);
    tail.next = head; // 连起来
    p = head; // p 指向原链表头
    while (k) {
        tail = p;
        p = p.next;
        k--;
    }
    tail.next = null;
    return p;
};
