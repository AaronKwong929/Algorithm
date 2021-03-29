/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
    let fast = head,
        slow = head;
    while (fast) {
        fast = fast.next;
        k--;
        if (k < 0) slow = slow.next;
    }
    return slow.val;
};

console.log(
    kthToLast(
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
);
