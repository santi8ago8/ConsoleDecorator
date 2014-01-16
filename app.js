
var width = process.stdout.columns;
console.log(width);

process.stdout.on('resize',function(){
	width = process.srdout.columns;
});

var colors = require('colors');

console.log(colors);
var clrs = [];

for (var i in colors){
	if (
	    i!='mode' && 
	    i!='themes' && 
	    i!='addSequencer' && 
	    i!='zalgo' && 
	    i!='setTheme' &&
	    i.indexOf('BG')==-1
	    )
		clrs.push(i);
}
var i=0;

setInterval(function(){
	
	console.log(('color: '+clrs[i])[clrs[i]]);
},250)
setInterval(function(){
	i++;
	if (i>=clrs.length)
		i=0;
},500);
