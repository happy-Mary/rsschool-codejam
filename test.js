/* eslint-env node, mocha */
const assert = require('assert');
const sumOfOrder = require('./src/sum-of-order');

describe('sumOfOrder', function() {
	const firstArr = [2, 3, 4, 1];
	const secondArr = [76, 90, 4, 3, 1, 1, 45, 9, 22];
	it('Should return expected result', function() {
		assert.deepEqual(sumOfOrder(firstArr), [8, 7, 6, 9]);
		assert.deepEqual(sumOfOrder(secondArr), [ 175, 161, 247, 248, 250, 250, 206, 242, 229 ]);
	});

	it('Should not return initial array', function() {
		assert.notDeepEqual(sumOfOrder(firstArr), firstArr);
	});

	it('Should be same length as input array', function() {
		assert.equal(sumOfOrder(firstArr).length, firstArr.length);
		assert.equal(sumOfOrder(secondArr).length, secondArr.length);
	});
});