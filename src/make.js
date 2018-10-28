/* eslint-env node, mocha */
module.exports = function make(...fn) {
	let args = [...fn];
	function nest() {
		return (a, ...x) => {
			fn = a;
			if (typeof a === 'function') {
				return args.reduce(fn, 0);
			}
			args = [...args, a, ...x];
			return nest();
		};
	}
	return nest();
};