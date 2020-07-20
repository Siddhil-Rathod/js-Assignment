let n=prompt("Enter the max limit");
let flag;
for(let i=2;i<=n;i++)
{
    flag=0;
    for(let j=2;j<=n;j++)
    {
        if(i%j==0)
        {
            flag++;
        }
    }
    if(flag==1)
    {
        console.log(i);
    }
}