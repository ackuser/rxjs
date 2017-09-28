let	Observable	=	require('rxjs/Observable').Observable;
//	patch	Observable	with	appropriate	methods
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');

let	stream$	= Observable.of(1,2,3).map((x)	=>	{	return	x	+	'!!!';	});	//	etc


stream$.subscribe((val)	=>	{
		console.log(val)	//	1!!!	2!!!	3!!!
})
