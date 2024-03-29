/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const stack1 = [],
        stack2 = [],
        dummy = new ListNode(0);
    let carry = 0;
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    while (stack1.length || stack2.length) {
        // 先存起来当前的链表
        const temp = dummy.next;
        const num1 = stack1.pop() || 0,
            num2 = stack2.pop() || 0,
            sum = num1 + num2 + carry;
        carry = parseInt(sum / 10);
        // 链表头插入新数据，接上缓存的原链表
        dummy.next = new ListNode(parseInt(sum % 10), temp);
    }
    if (carry) {
        const temp = dummy.next;
        dummy.next = new ListNode(parseInt(carry), temp);
    }
    return dummy.next;
};
// @lc code=end

console.log(
    JSON.stringify(
        addTwoNumbers(
            {
                val: 5,
            },
            { val: 5 }
        )
    )
);
