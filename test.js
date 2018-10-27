/* eslint-env node, mocha */
const assert = require('assert');
const sumOfOrder = require('./src/sum-of-order');

describe('sumOfOrder', function() {
	it('should return expected result', function() {
		assert.equal(sumOfOrder([2, 3, 4, 1]), [8, 7, 6, 9]);
	});
});