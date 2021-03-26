/**
 *
 * @param {number[]} nums
 */
const moveZeroes = function (nums) {
    let i = 0,
        j = 0;
    for (; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // 遇到了非0 元素，把 nums[i] 赋值给 nuns[j]， j移向下一位
            nums[j] = nums[i];
            j++;
        }
    }
    nums.fill(0, j);
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
