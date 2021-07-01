/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    const getSum = num => {
        let res = 0;
        while (num) {
            res += num % 10;
            num = Math.floor(num / 10);
        }
        return res;
    };

    const directions = [
        // [-1, 0], // 向上
        // [0, -1], // 向左
        [1, 0], // 向下
        [0, 1], // 向右
    ];

    // 已走过的坐标
    const set = new Set([`0,0`]);

    // 遍历的坐标队列
    let queue = [[0, 0]];
    while (queue.length) {
        // 移除队首
        const [x, y] = queue.shift();

        // 遍历方向
        for (let i = 0; i < directions.length; i++) {
            const newX = x + directions[i][0];
            const newY = y + directions[i][1];

            // 临界判断
            if (
                newX < 0 ||
                newY < 0 ||
                newX >= m ||
                newY >= n ||
                getSum(newX) + getSum(newY) > k ||
                set.has(`${newX},${newY}`)
            )
                continue;

            set.add(`${newX},${newY}`);
            queue.push([newX, newY]);
        }
    }
    return set.size;
};
