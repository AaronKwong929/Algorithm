/**
 *
 * @param {string} num
 */
const countAndSay = (num) => {
    let result = 1;
    for (let i = 0; i < num; i++) {
        result = result.replace(
            /(-|\+)(\d)\1*/g,
            (item) => `${item.length}${item[0]}`
        );
    }
};
