// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,3,2]
// 输出: 3
// 示例 2:

// 输入: [0,1,0,1,0,1,99]
// 输出: 99

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/single-number-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
// // 这个用了桶，额外空间 O(1)，桶的大小和 nums 大小相同
// const singleNumber = nums => {
//     const bucket = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (!bucket[nums[i]]) {
//             bucket[nums[i]] = 1;
//         } else {
//             bucket[nums[i]] += 1;
//         }
//     }

//     for (let j = 0; j < nums.length; j++) {
//         if (bucket[nums[j]] === 1) {
//             return nums[j];
//         }
//     }
// };

// 这个用了 Array.prototype.sort(); 算违规妈？
// * sort() 默认快排， 时间复杂度 O(logn) ~ O(n^2)
const singleNumber = nums => {
    nums = nums.sort();
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] !== nums[i + 1]) return nums[i];
    }
};

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
