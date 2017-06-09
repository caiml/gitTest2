// Write your cade below:
module.exports = function main() {
	function calculate(x,y){
	this.x=x;
	this.y=y;
	var z=x%y;
	return z;
	}
	//console.log(calculate(9,3));
	//console.log(calculate(11,4));
	
};
var z=new main.calculate(9,3);
    console.log(z);
    var a=new main.calculate(11,4);
    console.log(a);

