let num = prompt("Enter a positive number")

let arr=[];
for(let i=0;i<=num;i++)
    arr[i]=i;


arr = arr.filter((ele)=>{return ele%2==1;}).map((ele)=>{return ele**3;})
console.log(arr)