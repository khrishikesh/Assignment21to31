var n = prompt("Enter the number to be checked for perfect square");
n = parseInt(n);

var c = 0;

for(var i = 1; i<= n; i++)
{
	if(n%i == 0)
	{
		c++;
	}
}
if(c%2 != 0)
{
	alert("The number "+n+" is a perfect square");
}
else
{
	alert("The number "+n+" is not a perfect square");
}
	