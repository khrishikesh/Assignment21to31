var n = prompt("Enter the number till which you want prime numbers");
var i,j;
    
    for(i=2;i<=n;i++)
    {
        var c=0;
        for(j=1;j<=i;j++)
        {
            if(i%j==0)
            {
                c++;
            }
        }
         
       if(c==2)
        {
            console.log(i);
        }
    }

