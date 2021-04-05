/**
 * 
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 

提示：

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    const { length } = nums;
    for (let i = 0; i < length; i++) {
        let left = i + 1;
        let right = length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                const leftValue = nums[left];
                while (left < length && nums[left] === leftValue) {
                    left++;
                }
                const rightValue = nums[right];
                while (right > left && nums[right] === rightValue) {
                    right--;
                }
            } else if (sum < 0) {
                left--;
            } else {
                right--;
            }
        }
        while (i < length - 1 && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    return res;
};

console.log(threeSum([0]));
