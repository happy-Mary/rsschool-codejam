/* eslint-env node, mocha */
const assert = require('assert');
const sumOfOrder = require('./src/sum-of-order');
const make = require('./src/make');
const recursion = require('./src/recursion');

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

describe('Make Function', function() {
	it('Adding all input numbers', function() {
		function sum(a, b) {
			return a + b;
		}
		assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
	});
});

describe('Recursion Function', function() {
	it('Array returned from binary tree', function() {
		let tree = {'value':100,'left':{'value':90,'left':{'value':70},'right':{'value':99}},'right':{'value':120,'left':{'value':110},'right':{'value':130}}};
		assert.deepEqual(recursion(tree), [[100], [90, 120], [70,99,110,130]]);
	});
});