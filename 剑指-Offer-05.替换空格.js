/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    // return s.replace(/\s/g, `%20`);
    return s
        .split(``)
        .map(item => {
            if (item === ` `) return `%20`;
            return item;
        })
        .join(``);
};

console.log(replaceSpace(`     `));
