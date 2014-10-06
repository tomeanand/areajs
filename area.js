function area(args)	{
	var type = args[0];
	var area;
	var area_str = ['Square','Circle','Triange']
	switch(Number(type))	{
		case 1:
			area = args[1]*args[2];
		break;
		case 2:
			area = Number( Math.PI* (args[1]*args[1]) ).toFixed(2);
		break;
		case 3:
			area = .5* args[1]*args[2];
		break;
	}
	console.log('Area of '+area_str[type-1]+ " = "+area);
}

module.exports = area;