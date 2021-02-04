/**
 * o(n) 遍历数组
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray1 = function (numbers) {
    let min = numbers[0];
    for (let i of numbers) {
        if (i < min) min = i;
    }
    return min;
};

/**
 * 返回第一个不是递增数字的上一个数字
 * 如果都递增就返回第一个
 */
/**
 *
 * @param {number[]} numbers
 * @return {number}
 */
var minArray2 = function (numbers) {
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
            return numbers[i];
        }
    }
    return numbers[0];
};

/**
 *
 * @param {number[]} numbers
 * @return {number}
 */
const minArray3 = (numbers) => {
    let left = 0,
        right = numbers.length - 1;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (numbers[mid] > numbers[right]) {
            left = mid + 1;
        } else if (numbers[mid] === numbers[right]) {
            right--;
        } else {
            right = mid;
        }
    }
    return numbers[left];
};
