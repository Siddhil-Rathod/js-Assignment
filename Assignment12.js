let marks =prompt("enter your marks");
let grade;
//IF ELSE BLOCK
if(marks>=85)
{
    grade='A';
}
else if(marks>=75 && marks<85)
{
    grade='B';
}
else if(marks>=60 && marks<75)
{
    grade='C';
}
else if(marks>=40 && marks<60)
{
    grade='D';
}
else 
{
    grade='F';
}
console.log(`Marks are ${marks} and grade is ${grade}`);


//Switch
switch(marks)
{
    case 85: 
        grade='A';
        break;
    case 75: 
        grade='B';
        break;
    case 60: 
        grade='C';
        break;
    case 40: 
        grade='D';
        break;
    default: 
        grade='F';
        break;
}
console.log(`Marks are ${marks} and grade is ${grade}`);


//TERNARY
grade = marks>=85 ? 'A' : marks>=75 ? 'B': marks>=60 ? 'C' : marks>=40 ? 'D': 'F';

console.log(`Marks are ${marks} and grade is ${grade}`);