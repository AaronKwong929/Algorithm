/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.84%)
 * Likes:    611
 * Dislikes: 0
 * Total Accepted:    187.8K
 * Total Submissions: 448.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 500] 内
 * -100
 * 0
 *
 *
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (k === 0 || !head || !head.next) return head;
    let len = 0;
    let tail;
    let cur = head;

    while (cur.next) {
        len++;
        cur = cur.next;
    }
    len++;
    cur.next = head; // 连起来

    cur = head;
    let move = len - (k % len);
    while (move) {
        tail = cur;
        cur = cur.next;
        move--;
    }
    tail.next = null;
    return cur;
};
// @lc code=end

console.log(
    JSON.stringify(
        rotateRight(
            {
                val: 1,
                next: {
                    val: 2,
                    next: { val: 3, next: { val: 4, next: { val: 5 } } },
                },
            },
            2
        )
    )
);
