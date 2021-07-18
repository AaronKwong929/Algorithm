/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const res = [];
    const { length } = graph;
    const helper = (s, path) => {
        path.push(s);

        if (s === length - 1) {
            res.push(path.slice());
            path.pop();
            return;
        }

        for (const item of graph[s]) helper(item, path);

        path.pop();
    };

    helper(0, []);
    return res;
};
// @lc code=end
