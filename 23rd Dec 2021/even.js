var n = prompt("Enter the value of n");
n = parseInt(n);

var i = 1;
console.log("The even Numbers are: ");
while(i <= n)
{
	if(i%2 == 0)
	{
		console.log(i);
	}
	i++;
}