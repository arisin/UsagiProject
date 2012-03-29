// JavaScript Document

var i = 0;//月
var n = 0;
var m = 0;

f = function(n, m){
	while(0 < 12){
			console.log(n + m);
			return f(n + 1, m = n + m);
			i++;
		}
}