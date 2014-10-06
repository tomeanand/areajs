var area = require('./area.js');


if(process.argv.length > 3)	{
	var args = [];
	for(var i=2; i<process.argv.length; i++)	{
		args.push(process.argv[i]);
	}
	area(args)

}
else	{
console.log("Usage : 2nd parameter is type of shape \n \tand rest of the parameters for area calculation correspoding to type");
console.log('\ttype 1 == square, type 2 == circle and type 3 == triange')
}


