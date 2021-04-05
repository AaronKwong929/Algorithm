/**
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

 

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
 

提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/product-of-array-except-self
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const leftProduct = [],
        rightProduct = [],
        result = [],
        len = nums.length;
    leftProduct[0] = 1;
    rightProduct[len - 1] = 1;
    for (let i = 1; i < len; i++) {
        leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
    }
    for (let j = len - 2; j >= 0; j--) {
        rightProduct[j] = nums[j + 1] * rightProduct[j + 1];
    }
    for (let k = 0; k < len; k++) {
        result[k] = leftProduct[k] * rightProduct[k];
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));

// 当前数左区间 * 当前数右区间
// 当前数左区间乘积 = 当前数左边的一个数 * 当前数左边数的乘积