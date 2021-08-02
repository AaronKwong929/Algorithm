/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 *
 * https://leetcode-cn.com/problems/koko-eating-bananas/description/
 *
 * algorithms
 * Medium (47.52%)
 * Likes:    188
 * Dislikes: 0
 * Total Accepted:    38.3K
 * Total Submissions: 80.6K
 * Testcase Example:  '[3,6,7,11]\n8'
 *
 * 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。
 *
 * 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K
 * 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。
 *
 * 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。
 *
 * 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入: piles = [3,6,7,11], H = 8
 * 输出: 4
 *
 *
 * 示例 2：
 *
 * 输入: piles = [30,11,23,4,20], H = 5
 * 输出: 30
 *
 *
 * 示例 3：
 *
 * 输入: piles = [30,11,23,4,20], H = 6
 * 输出: 23
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= piles.length <= 10^4
 * piles.length <= H <= 10^9
 * 1 <= piles[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1,
        right = Math.pow(10, 9) + 1; // 最小速度 1根/小时，最大速度就是 piles 的最大值，10^9，+1用左闭右开区间
    // left < right & left = mid + 1，right = mid
    while (left < right) {
        const mid = left + ((right - left) >> 2);
        // 如果得出当前需要的小时数大于h（保安回来的时间）即要加快速度，left = mid + 1
        if (f(piles, mid) > h) left = mid + 1;
        else right = mid; // 当前需要小时数小于h（保安回来的时间），收紧右侧区间 right = mid，找到最左侧的值
    }
    return left;
};

const f = (piles, x) => {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
        // 以 x 的速度去吃当前 pile[i] 的香蕉，需要的小时数
        hours += Math.ceil(piles[i] / x);
    }
    return hours;
};
// @lc code=end

/**
 * 关键点1：left 和 right 的判断，最小速度1，最大速度每小时吃一堆，
 * 所以left = 1，right = 香蕉数组最大值
 * 可以是O(n)遍历数组获得最大值，也可以看题目提示，1 <= piles[i] <= 10^9
 * right = Math.pow(10, 9) + 1
 * +1决定左闭右开；left < right；left = mid + 1, right = mid
 *
 * 关键点2：写出 关于 x 的单调函数 f(x)
 * 以 x 为吃香蕉的速度
 * 求吃掉全部香蕉的时间
 * Math.ceil(piles[i] / x) 求得总共需要多少小时
 */

/**
 * 写类似题目的时候，输入的第二个参数抽象为 f(x) 要得出的结果
 * 类似本题输入的第二个参数小时，这个小时就可以用在f(x)的返回值上
 * 然后去做二分判断
 */

/**
 * 类似题目 1011
 * 参考出处 https://labuladong.gitbook.io/algo/mu-lu-ye-1/mu-lu-ye-3/er-fen-yun-yong#li-ti-yi-ke-ke-chi-xiang-jiao
 */
