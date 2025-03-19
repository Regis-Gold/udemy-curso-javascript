let varA = 'A'; // tenha valor de B
let varB = 'B'; // valor de B tenha valor de C
let varC = 'C'; // valor de C tenha valor de A

/*
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
console.log(varA, varB, varC)
*/

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)