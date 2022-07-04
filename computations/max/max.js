const array = [1, 7, 5, 8];

const max = array.reduce((a,b) => {
    return Math.max(a,b)
});


// const max = ([a,b,c]) => {
//     return Math.max(a,b,c);
// }

module.exports = max;