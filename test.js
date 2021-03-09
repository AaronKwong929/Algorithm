const reg = /^【~[1-4]{1,4}~\S+/;

console.log(reg.test(`【~111~12wadwadwadwadawd34`));

const target = {
    textStyle: {
        italic: true,
        bold: true,
        underline: true,
        dotted: true,
    },
};
const target2 = {
    textStyle: [`italic`, `bold`, `dotted`, `underline`],
};
