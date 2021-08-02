/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 *
 * https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/description/
 *
 * algorithms
 * Medium (62.79%)
 * Likes:    378
 * Dislikes: 0
 * Total Accepted:    56.7K
 * Total Submissions: 90.3K
 * Testcase Example:  '[1,2,3,4,5,6,7,8,9,10]\n5'
 *
 * 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。
 *
 * 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
 *
 * 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
 * 输出：15
 * 解释：
 * 船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
 * 第 1 天：1, 2, 3, 4, 5
 * 第 2 天：6, 7
 * 第 3 天：8
 * 第 4 天：9
 * 第 5 天：10
 *
 * 请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9),
 * (10) 是不允许的。
 *
 *
 * 示例 2：
 *
 *
 * 输入：weights = [3,2,2,4,1,4], D = 3
 * 输出：6
 * 解释：
 * 船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
 * 第 1 天：3, 2
 * 第 2 天：2, 4
 * 第 3 天：1, 4
 *
 *
 * 示例 3：
 *
 *
 * 输入：weights = [1,2,3,1,1], D = 4
 * 输出：3
 * 解释：
 * 第 1 天：1
 * 第 2 天：2
 * 第 3 天：3
 * 第 4 天：1, 1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    // 最小载重：weights元素最大值（每次最少一件货物）
    // 最大载重：weights 元素之和，最大一次运走所有货物
    let left = 0;
    let right = 1;
    for (const weight of weights) {
        left = Math.max(left, weight);
        right += weight;
    }
    while (left < right) {
        const mid = left + ((right - left) >> 2);
        // 当需要天数大于限定天数，要增加载重
        if (f(weights, mid) > days) left = mid + 1;
        // 需要的天数小于限定天数时，找最左侧边界（最小负重）
        else right = mid;
    }
    return left;
};

// 当运载能力为 x 时，需要 f(x) 天完成运送
const f = (weights, x) => {
    let days = 0;
    for (let i = 0; i < weights.length; ) {
        let capacity = x;
        while (i < weights.length) {
            if (capacity < weights[i]) {
                // left 最小值是数组内最大值，不存在运不走单个货物的问题
                // capacity 小于某个具体货物的话，需要增加一天来运（中断循环）
                break;
            } else {
                // 如果capacity大于当前货物，即今天能运走，负载减去当前值
                capacity -= weights[i];
            }
            i++;
        }
        days++;
    }
    return days;
};
// @lc code=end

/**
 * 关键点1. left 和 right 的确定
 * 初始值left = 0，right = 1（左闭右开） left < right & left = mid + 1, right = mid
 * 运载最小值必然是运载货物列表的最大值，不然无法运送
 * left = Math.max(left, weights[i])
 * 运载最大值是货物总量，即一趟运走
 * right = sum(weights) + 1
 *
 * 关键点2：f(x)函数
 * 运载能力为 x 的时候，需要 f(x) 天完成运送
 *
 */

/**
 * 写类似题目的时候，输入的第二个参数抽象为 f(x) 要得出的结果
 * 类似本题需要的是天数，那么f(x)的返回结果就是天数，用 f(mid)和这个天数比
 * 然后去做二分判断
 */

/**
 * 类似题目 875
 * 参考出处 https://labuladong.gitbook.io/algo/mu-lu-ye-1/mu-lu-ye-3/er-fen-yun-yong#li-ti-yi-ke-ke-chi-xiang-jiao
 */