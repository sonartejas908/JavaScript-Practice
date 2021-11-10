let num =11;
let flag = 0;
for(i=2; i<=num/2; i++)
{
    if(num % i == 0)
    {
        flag = 1;
        break;
    }
}
if(flag == 1)
{
    console.log("Not Prime Number");
}
else
{
    console.log("Prime Number");
}