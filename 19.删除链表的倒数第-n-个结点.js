/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head,
        slow = head;
    while (n) {
        fast = fast.next;
        n--;
    }
    if (!fast) return head.next;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
// @lc code=end

console.log(
    JSON.stringify(
        removeNthFromEnd(
            {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: { val: 4, next: { val: 5, next: null } },
                    },
                },
            },
            2
        )
    )
);
