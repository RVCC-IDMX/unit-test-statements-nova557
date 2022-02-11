/*
 * stmnts-01.js
 * Language: javascript
 * Test: tests/stmnts-01.test.js
 * Path: src/stmnts-01.js
 *
 * Arithmetic
 */

/**
 * Calculates the next integer as if you were counting up by 1
 * @param {integer} int - 1
 * @returns {integer} - 2
 */
function nextInteger(int) {
  return int + 1;
}
/**
 * Calculates the product of two numbers
 * @param {number} a - 5
 * @param {number} b - 2
 * @returns {number} - 10
 */
function times(a, b) {
  return a * b;
}

/**
 * Converts the number of minutes into seconds
 * @param {number} minutes - 3
 * @returns {number} - 180
 */
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

/**
 * Converts the number of hours into seconds
 * @param {number} hours - 2
 * @returns {number} - 7200
 */
function convertHoursToSeconds(hours) {
  return hours * 3600;
}

module.exports = {
  nextInteger,
  times,
  convertMinutesToSeconds,
  convertHoursToSeconds,
};
