/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (55.71%)
 * Likes:    1440
 * Dislikes: 0
 * Total Accepted:    297K
 * Total Submissions: 533.2K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 *
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 *
 *
 *
 * 示例 1：
 *
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 *
 *
 * 示例 2：
 *
 * 输入：lists = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 * 输入：lists = [[]]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // // 方法-1 数组 api
    // const dummy = new ListNode();
    // let temp = dummy;
    // lists
    //     .reduce((acc, cur) => {
    //         while (cur) {
    //             acc.push(cur.val);
    //             cur = cur.next;
    //         }
    //         return acc;
    //     }, [])
    //     .sort((a, b) => a - b)
    //     .forEach(item => {
    //         temp.next = new ListNode(item);
    //         temp = temp.next;
    //     });
    // return dummy.next;

    // // 方法22
    // let n = lists.length;
    // if (n == 0) return null;
    // let res = lists[0];
    // for (let i = 1; i < n; i++) {
    //     if (lists[i]) res = mergeTwoLists(res, lists[i]);
    // }
    // return res;

    // 方法-3 归并排序 - 分治
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];
    const mid = Math.floor(lists.length / 2);
    const left = lists.slice(0, mid);
    const right = lists.slice(mid);
    return mergeTwoLists(mergeKLists(left), mergeKLists(right));
};

var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    const dummy = new ListNode();
    let head = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            head.next = new ListNode(l1.val, null);
            l1 = l1.next;
        } else {
            head.next = new ListNode(l2.val, null);
            l2 = l2.next;
        }
        head = head.next;
    }
    head.next = l1 ? l1 : l2;
    return dummy.next;
};
// @lc code=end

/**
 * 方法 1 比较作弊，用的都是数组 api
 * 遍历全部list 全部加入到一个数组中，然后对数组排序，再遍历一次合成新链表
 *
 * 方法 2 半斤八两
 * 每次合并两个链表，但是每次都会用到
 *
 * 方法 3 归并排序 即分治法
 * 是方法2的优化版
 */
