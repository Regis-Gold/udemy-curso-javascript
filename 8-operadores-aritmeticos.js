/* 
  Aritméticos
  + Adição ou concatenação
  - Subtração
  / Divisão
  * Multiplicação
  ** Potenciação
  % Resto da divisão
  ++ Operador de (pré e pós) incremento
  -- Operador de (pré e pós) decremento
  +=, -=, *=... Operador de atribuição
*/

/*
    Regra de precedência
    () Parenteses
    ** Potenciação
    * Multiplicação
    / Divisão
    % Módulo da divisão
    + Adição ou concatenação
    - Subtração
*/

/*
    NaN Not a Number
    parseInt (n inteiro)
    parceFloat(n decimal)
    Number
*/

const num1 = 200;
const num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log((num1 + num2) * num2);

let contador = 2;
contador++; // 3
contador++; // 4
console.log(contador);

let contador2 = 10;
--contador2; // 3
--contador2; // 4
console.log(contador2);

const steep = 3;
let contador3 = 0;
contador3 = contador3 + steep;
console.log(contador3);
contador3 = contador3 + steep;
console.log(contador3);
contador3 = contador3 + steep;
console.log(contador3);

let contador4 = 0;
contador4 += 10;
contador4 += 10;
contador4 += 10;
console.log(contador4);

const num3 = 10;
const num4 = parseInt('5.5');
console.log(num3 + num4);
const num5 = parseFloat('5.5');
console.log(num3 + num5);
const num6 = Number('10.5'); // usar esse
console.log(num3 + num6); 


