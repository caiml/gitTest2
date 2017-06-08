// Write your cade below:
module.exports = function main() {
    function deplex(x,y){
		var z=x%y;
		return z;
	}
	console.log(deplex(9,4));
	console.log(deplex(9,3));
};