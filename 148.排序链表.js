/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
    if (!head || !head.next) return head;
    let slow = head,
        fast = head;
    // 快慢指针 结束循环时慢指针指向链表中间
    while (slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // middle 存起slow指针后续部分
    const middle = slow.next;
    // 断开slow
    slow.next = null;

    // 分开左右两部分
    const left = head,
        right = middle;
    // 归并 递归处理到当前left / right只有一个节点
    return merge(sortList(left), sortList(right));
};

// 归并排序。输出排序后的链表（新的空间）
/**
 * 其实就是拆分成一个一个 [x] [y]，进行内部排序 组成一个完整的链表
 */
const merge = (left, right) => {
    const tmp = new ListNode(0);
    let p1 = left,
        p2 = right,
        p = tmp;

    while (p1 && p2) {
        // 构建排序链表 - 断开单个，接入到新位置，目标链表指针移动
        if (p1.val < p2.val) {
            const temp = p1.next;
            p1.next = null;
            p.next = p1;
            p1 = temp;
        } else {
            const temp = p2.next;
            p2.next = null;
            p.next = p2;
            p2 = temp;
        }
        p = p.next;
    }
    // 接上剩余链表
    if (p1) p.next = p1;
    if (p2) p.next = p2;
    return tmp.next;
};
// @lc code=end

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(
    sortList({
        val: 4,
        next: { val: 2, next: { val: 1, next: { val: 3, next: null } } },
    })
);
