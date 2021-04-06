/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let positiveStr = ``,
        reverseStr = ``;
    while (head) {
        const val = head.val;
        positiveStr = positiveStr + val;
        reverseStr = val + reverseStr;
        head = head.next;
    }

    return positiveStr === reverseStr;
};
// @lc code=end
