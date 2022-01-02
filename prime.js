var n = prompt("Enter the number to check if it is prime or not:");

n = parseInt(n);


var flag = 0;

for(var i = 2; i <= n/2; i++)
{
	if(n%i == 0)
	{
		flag = 1;
		break;
	}
}

if(flag == 1)
{
	alert("The number is Not Prime");
}
else
{
	alert("The number is Prime");
}
