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
    let pre = null,
        cur = head,
        next = head;
    while (cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;

    // 递归
    if (!head || !head.next) return head;
    let last = null;
    const helper = head => {
        if (!head.next) return head;
        last = helper(head.next);
        head.next.next = head;
        head.next = null;
        return last;
    };
    return helper(head);
};
// @lc code=end

// 可以看东哥解析
// https://labuladong.gitbook.io/algo/mu-lu-ye-1/mu-lu-ye/di-gui-fan-zhuan-lian-biao-de-yi-bu-fen

// 博客也写了关于反转链表的
