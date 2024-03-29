/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (54.89%)
 * Likes:    1075
 * Dislikes: 0
 * Total Accepted:    258.4K
 * Total Submissions: 470.4K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 *
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是
 * -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 *
 * 说明：不允许修改给定的链表。
 *
 * 进阶：
 *
 *
 * 你是否可以使用 O(1) 空间解决此题？
 *
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：返回索引为 1 的链表节点
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2], pos = 0
 * 输出：返回索引为 0 的链表节点
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：head = [1], pos = -1
 * 输出：返回 null
 * 解释：链表中没有环。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目范围在范围 [0, 10^4] 内
 * -10^5
 * pos 的值为 -1 或者链表中的一个有效索引
 *
 *
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // const set = new Set();
    // while (head && head.next) {
    //     if (set.has(head)) return head;
    //     set.add(head);
    //     head = head.next;
    // }
    // return null;
    let fast = head,
        slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }
    if (!fast || !fast.next) return null;
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
// @lc code=end

/**
 * 个人思路
 * set记录当前节点
 * 没有就加入，如果已有这个节点直接返回（重复节点必定是环起始位置）
 * 如果循环中断表明没环，直接返回null
 */

/**
 * 优化思路：
 * https://labuladong.gitbook.io/algo/mu-lu-ye-1/mu-lu-ye-3/shuang-zhi-zhen-ji-qiao
 * 双指针
 * 先判断有没有环
 * 有环的话 快指针走了2k步，慢指针走了k步
 * 快指针一直在环里转圈圈，快比慢多走k步，k是环长整数倍（考虑环长为1的情况去理解）
 * 假设相遇点距离环起点为m
 * 从起点到相遇点的距离为 k - m（右边减m）
 * 从相遇点移动 k - m 也会到达起点（左边减m）
 * 同时移动后会在起点停止循环
 */
