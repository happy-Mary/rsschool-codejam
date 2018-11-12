/* eslint-env node, mocha */
module.exports = function recursion(obj) {
	function getNodes(arr, left, right) {
		arr.push(left.value);
		arr.push(right.value);
		
		while(left.leftPart && left.rightPart) {
			getNodes(arr, left.leftPart, left.rightPart);
			getNodes(arr, right.leftPart, right.rightPart);
			return arr;
		}
		return arr;
	}

	function groupNodes(arr, i, l) {
		while(l <= treeArray.length) {
			arr.push(treeArray.slice(i, l));
			return groupNodes(arr, l, l*2+1);
		}
		return arr;
	}

	
	let treeArray = getNodes([obj.value], obj.left, obj.right);
	return groupNodes([], 0, 1);
};