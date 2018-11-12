/* eslint-env node, mocha */
module.exports = function sumOfOrder(arr) {
	const sum = arr.reduce((a, b)=> a+b, 0);
	return arr.map(el => sum - el);
};
