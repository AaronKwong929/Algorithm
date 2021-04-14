/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
    if (!head || !head.next) return head;
    let slow = head,
        fast = head;
    while (slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let middle = slow.next;
    slow.next = null;
    let left = head,
        right = middle;
    return merge(sortList(left), sortList(right));
};

// 归并排序。输出排序后的链表（新的空间）
/**
 * 其实就是拆分成一个一个 [x] [y]，进行内部排序 组成一个完整的链表
 */
const merge = (left, right) => {
    const dummy = new ListNode(0);
    let p1 = left,
        p2 = right,
        p = dummy;
    while (p1 && p2) {
        if (p1.val < p2.val) {
            // p1 较小，接入p1
            const temp = p1.next;
            p1.next = null;
            p.next = p1;
            p1 = temp;
        } else {
            // p2较小，接入p2
            const temp = p2.next;
            p2.next = null;
            p.next = p2;
            p2 = temp;
        }
        p = p.next;
    }
    if (p1) p.next = p1;
    if (p2) p.next = p2;
    return dummy.next;
};
// @lc code=end

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(
    sortList({
        val: 4,
        next: { val: 2, next: { val: 1, next: { val: 3, next: null } } },
    })
);
