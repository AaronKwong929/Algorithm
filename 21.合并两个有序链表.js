/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    const dummy = new ListNode(0, null);
    let head = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            head.next = new ListNode(l1.val, null);
            l1 = l1.next;
        } else {
            head.next = new ListNode(l2.val, null);
            l2 = l2.next;
        }
        head = head.next;
    }
    if (l1) {
        head.next = l1;
    }
    if (l2) {
        head.next = l2;
    }
    return dummy.next;
};
// @lc code=end
console.log(
    JSON.stringify(
        mergeTwoLists(
            {
                val: 1,
                next: { val: 2, next: { val: 4, next: null } },
            },
            {
                val: 1,
                next: { val: 3, next: { val: 4, next: null } },
            }
        )
    )
);

console.log(JSON.stringify(mergeTwoLists()));
