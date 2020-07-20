let ask = (question, yes, no)=> {if(confirm(question)) yes(); else no();}

ask("Do you agree?", yes =()=>alert("You confirmed"),no=()=>alert("You canceled the execution"));