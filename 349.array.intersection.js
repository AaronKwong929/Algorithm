/**
 * 给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const hash = {},
        result = [];
    for (let i = 0; i < nums1.length; i++) {
        if (!hash[nums1[i]]) hash[nums1[i]] = 0;
        hash[nums1[i]]++;
    }
    for (let j = 0; j < nums2.length; j++) {
        if (hash[nums2[j]]) {
            hash[nums2[j]]--;
            if (!result.includes(nums2[j])) {
                result.push(nums2[j]);
            }
        }
    }
    return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
