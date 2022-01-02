var a = prompt("Input 1st number");
a = parseInt(a);

var b = prompt("Input 1st number");
b = parseInt(b);

var c = prompt("Input 1st number");
c = parseInt(c);

if(a<b && a<c)
{
	alert("1st number "+a+" is the smallest");
}
else if(b<a && b<c)
{
	alert("2nd number "+b+" is the smallest");
}
else
{
	alert("3rd number "+c+" is the smallest");
}