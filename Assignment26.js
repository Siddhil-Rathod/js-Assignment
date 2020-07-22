const tt=document.getElementById('time')

function clock(){
let date=new Date();
let time = date.toLocaleTimeString();
tt.innerText = time;
}


setInterval(clock,1000);


let name=prompt("enter your name");

const n=document.getElementById('wel')

n.innerText = `Welcome to the webpage , ${name}`

const btn = document.getElementById('dk')

let t=true;
const swi=document.body;
function change(){
    if(t){
        btn.innerText="switch to normal"
        t=false
    }
    else{
        btn.innerText="switch to dark mode"
        t=true
    }
    swi.classList.toggle('dark');
}