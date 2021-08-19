/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (39.29%)
 * Likes:    707
 * Dislikes: 0
 * Total Accepted:    334.2K
 * Total Submissions: 850.6K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 *
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 *
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 *
 * 示例 1:
 *
 * 输入: 4
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842...,
 * 由于返回类型是整数，小数部分将被舍去。
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let [left, right] = [0, x];
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (mid > x / mid) right = mid - 1;
        else if (mid < x / mid) left = mid + 1;
        else return mid;
    }
    return right;
};
// @lc code=end

// 从0-x找一个数平方等于x值，防止溢出用 mid > x / mid
// 循环结束条件 left === right + 1，right+1已经在前几轮的循环里被判断为 (right + 1) ^ 2 > mid，所以不返回left，返回right
