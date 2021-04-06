/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // // 双指针 二人赛跑
    // if (!head) return false;
    // let fast = head,
    //     slow = head;
    // while (fast && fast.next) {
    //     fast = fast.next.next;
    //     slow = slow.next;
    //     if (fast === slow) return true;
    // }
    // return false;

    // // Map
    // if (!head) return false;
    // const map = new Map();
    // while (head) {
    //     if (map.has(head)) return true;
    //     else map.set(head, 1);
    //     head = head.next;
    // }
    // return false;

    // Symbol
    if (!head) return false;
    const newVal = Symbol('');
    while (head) {
        if (head.val === newVal) return true;
        head.val = newVal;
        head = head.next;
    }
    return false;
};
// @lc code=end
