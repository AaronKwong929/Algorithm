/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {};

// O(n)
// 优解：升序数组的断层处即是最小值 [4,5,6,1,2,3] 456升序，断层1是最小值
// 特殊情况： 旋转0次，[1,2,3,4] for循环没退出则返回第一个数字
// 最差O(n) 旋转0次 和 旋转了n-1次（[.....,a0]）

// 最优解：二分查找
// 左边界 low 右边界 high 区间中点 pivot
// numbers[low] numbers[pivot] numbers[height]比较
