const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// const array3 = array1.concat(array2, [7, 8]);
// ...rest
// ...spread
const array3 = [...array1, ...array2, ...[7, 8, 9], 'Regis'];
console.log(array3);