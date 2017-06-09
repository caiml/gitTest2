// Write your cade below:
module.exports = function main() {
	function calculate(x,y){
	this.x=x;
	this.y=y;
	var z=x%y;
	return z;
	}
	console.log(calculate(9,3));
	console.log(calculate(11,4));
};