let num=prompt("Enter a number")

const li=document.getElementById('list')

for(let i=1;i<=10;i++)
{
    li.innerText += `${num} * ${i} = ${num*i}\n`;
}