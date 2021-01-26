/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = (nums) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
            continue;
        } else {
            return nums[i];
        }
    }
};

console.log(findRepeatNumber([0, 1, 0]));
