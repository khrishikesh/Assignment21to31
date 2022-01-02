var n = prompt("Enter number to check its factorials");
n = parseInt(n);

var i = 1;
var fact = 1;

while(i <= n)
{
	fact = fact * i;
	i++;
}

alert("Factorial of "+n+" is "+fact);

