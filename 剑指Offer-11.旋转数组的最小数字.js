/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    const { length } = numbers;
    let left = 0,
        right = length - 1;
    if (numbers[0] < numbers[length - 1]) return numbers[0];
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (numbers[mid] > numbers[mid] + 1) return numbers[mid + 1];
        else if (numbers[mid] < numbers[mid - 1]) return numbers[mid];
        else if (numbers[mid] > numbers[left]) left = mid + 1;
        else right = mid - 1;
    }
    return numbers[left];
};

// O(n)
// 优解：升序数组的断层处即是最小值 [4,5,6,1,2,3] 456升序，断层1是最小值
// 特殊情况： 旋转0次，[1,2,3,4] for循环没退出则返回第一个数字
// 最差O(n) 旋转0次 和 旋转了n-1次（[.....,a0]）

// 最优解：二分查找
// 左边界 low 右边界 high 区间中点 pivot
// numbers[low] numbers[pivot] numbers[height]比较
