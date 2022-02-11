/*
 * stmnts-03.js
 * Language: javascript
 * Test: tests/stmnts-03.tests.js
 * Path: src/stmnts-03.js
 * Arithmetic Expressions
 * [JavaScript: The Definitive Guide, Chapter 4.8](https://bit.ly/2Z30rSk)
 */

/**
 * Calculates the perimeter of the rectangle rounded to 2 decimal places
 * @param {number} width - 10
 * @param {number} height - 15
 * @returns {number} - 0.50
 *
 */

function rectanglePerimeter(width, height) {
  return +((width + height) * 2).toFixed(2);
}

/**
 * Calculates the area of a rectangle rounded to 2 decimal places
 * @param {number} width - 10
 * @param {number} height - 15
 * @returns {number} - 1.5
 *
 */
function rectangleArea(width, height) {
  return +(width * height).toFixed(2);
}

/**
 * Calculates the circumference of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - 3
 * @returns {number} - the circumference of the circle rounded to 2 decimal places
 *
 * The math equation is c = 2 * pi * radius
 *
 * Hint: use toFixed()
 */
function circleCircumference(radius) {
  return +(2 * Math.PI * radius).toFixed(2);
}

/**
 * Calculates the area of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the area of the circle rounded to 2 decimal places
 */
function circleArea(radius) {
  return +(Math.PI * radius * radius).toFixed(2);
}

/**
 * Calculates the area of a triangle with three sides
 * rounded to 2 decimal places
 *
 * @param {number} base - the base of the triangle
 * @param {number} height - the height of the triangle
 * @returns {number} - the area of the triangle rounded to 2 decimal places
 */
function triangleArea(base, height) {
  return +((base * height) / 2).toFixed(2);
}

/**
 * Calculates the hypotenuse of a right triangle with two sides,
 * rounded to 2 decimal places
 * @param {number} sideA - the length of side A
 * @param {number} sideB - the length of side B
 * @returns {number} - the hypotenuse of the triangle rounded to 2 decimal places
 */
function pythagorean(sideA, sideB) {
  return +Math.hypot(sideA, sideB).toFixed(2);
}

module.exports = {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
};
