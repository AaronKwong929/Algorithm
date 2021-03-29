///存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

// 返回同样按升序排列的结果链表。

// 1 -> 1 -> 2
// ⬇️
// 1 -> 2

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
var deleteDuplicates = function (head) {
    if (!head) return head;
    let temp = head;
    while (temp.next) {
        if (temp.val === temp.next.val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
};

console.log(
    JSON.stringify(
        deleteDuplicates({
            val: 1,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: { val: 3, next: { val: 3, next: null } },
                },
            },
        })
    )
);
