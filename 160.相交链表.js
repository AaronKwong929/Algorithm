/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // if (!headA || !headB) return null;
    // let pA = headA;
    // let pB = headB;
    // while (pA !== pB) {
    //     pA = pA === null ? headB : pA.next;
    //     pB = pB === null ? headA : pB.next;
    // }
    // return pA;

    if (!headA || !headB) return null;
    let lenA = 0,
        lenB = 0;
    let pa = headA,
        pb = headB;
    while (pa) {
        lenA++;
        pa = pa.next;
    }
    while (pb) {
        lenB++;
        pb = pb.next;
    }
    let diff = lenA - lenB;
    pa = headA;
    pb = headB;
    if (diff > 0) {
        while (diff !== 0) {
            pa = pa.next;
            diff--;
        }
    } else {
        while (diff !== 0) {
            pb = pb.next;
            diff++;
        }
    }
    while (pa) {
        if (pa === pb) {
            return pa;
        }
        pa = pa.next;
        pb = pb.next;
    }
    return null;
};
// @lc code=end
