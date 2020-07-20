let sales=prompt('Enter the sales amount',"000");

let reward;

reward= (sales>=0 && sales<=5000) ? 2: sales<=10000 ? 5 : sales<=20000 ? 7: 10;

let final_amount= ((reward/100) * sales);

console.log(`The reward percentage is ${reward}% and the total commission earned is ${final_amount}`);