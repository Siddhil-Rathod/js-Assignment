async function fetchtodo(){
    const response =await fetch("https://jsonplaceholder.typicode.com/todos")
    let data=await response.json();
    data = data.filter((ele)=>{
        return ele["completed"]==true;
    }) 
    console.log(data)
}

fetchtodo();