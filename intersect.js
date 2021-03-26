/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
const intersect = function (nums1, nums2) {
    const hash = {},
        result = [];
    for (const i of nums1) {
        if (!hash[i]) hash[i] = 1;
        else {
            hash[i] += 1;
        }
    }

    for (const j of nums2) {
        if (hash[j]) {
            hash[j] -= 1;
            result.push(j);
        }
    }

    return result;
};

console.log(intersect([1, 2, 3], [2, 3]));
