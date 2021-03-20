/**
 *
 * @param {string} num
 */
const romanToIntOne = num => {
    let result = 0;
    for (const key in roman) {
        if (num.includes(key)) {
            result += roman[key];
            num = num.replace(key, '');
        }
    }
    for (const i of num) {
        result += list[i];
    }
    return result;
};
const roman = Object.freeze({
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
});
const list = Object.freeze({
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
});

console.log(romanToIntOne(`MCMXCIV`))