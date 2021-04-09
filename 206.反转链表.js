/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
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
var reverseList = function (head) {
    if (!head || head.next === null) return head;
    let p = head.next;
    head.next = null; // 头节点断开 head: 1 ->null
    while (p !== null) {
        const temp = p.next; // temp 3-4-5-null
        p.next = head; // p: 2-1-null
        head = p; // head 2-1-null
        p = temp; // p 3-4-5-null
    }
    return head;
};
// @lc code=end
