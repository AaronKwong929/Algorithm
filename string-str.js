/**
 *
 * @param {string} haystack
 * @param {string} needle
 */
const strStr = (haystack, needle) => {
    const { length: hayLen } = haystack,
        { length: ndLen } = needle;
    if (!needle) return 0;
    if (hayLen < ndLen) return -1;
    else if (hayLen === ndLen) {
        return haystack === needle ? 0 : -1;
    } else {
        for (let i = 0; i <= hayLen - ndLen; i++) {
            if (haystack[index] !== needle[0]) continue;

            if (haystack.substring(index, index + ndLen) === needle)
                return index;
        }
    }
    return -1;
};

/**
 * 如果needle为空返回0（cpp
 * hayLen < ndLen 直接返回-1
 * 其余情况循环比较
 * hayLen最多剩余长度刚好是ndLen，多了就ndLen > hayLen不可能 所以for循环条件 i <= hayLen - ndLen
 */