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
    let slow = head,
        fast = head;
    while (n--) fast = fast.next;
    if (!fast) return head.next;
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
// @lc code=end

/**
 * 快指针先移动n个位置
 * 如果此时快指针已经是null，证明n大于整个链表的长度
 * 此时直接移除头节点
 * 
 * 快慢指针同时移动
 * 快指针移动结束时慢指针对应被删除结点的前结点
 */