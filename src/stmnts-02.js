/*
 * stmnts-02.js
 * Language: javascript
 * Test: tests/stmnts-02.test.js
 * Path: src/stmnts-02.js
 * Arithmetic Operators
 * [JavaScript: The Definitive Guide, Chapter 4.7](https://bit.ly/3klr79d)
 */

/**
 * Calculates the sum of two numbers
 * @param {number} a - 7
 * @param {number} b - 3
 * @returns {number} - 10
 */
function sum(a, b) {
  return a + b;
}

/**
 * Calculates the sum of two numbers (even if they are passed as strings)
 * @param {number|string} x - 10
 * @param {number|string} y - 5
 * @returns {number} - 15
 */
function betterSum(x, y) {
  return +x + +y;
}

/**
 * Calculates the remainder of two numbers, the first divided by the second
 * @param {number} number - 15
 * @param {number} divisor - 5
 * @returns {number} - 3
 *
 * ? [JavaScript: The Definitive Guide, Chapter 4.8](https://bit.ly/2Z30rSk)
 * ? computes the first operand modulo the second operand
 */
function remainder(number, divisor) {
  return number % divisor;
}
module.exports = {
  sum,
  betterSum,
  remainder,
};
