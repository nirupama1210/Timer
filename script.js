let val=10;
let timer = () =>{
setInterval(() => {
    if(val>0)
    {
document.getElementById("p1").innerHTML=val;
    }
    else{
        document.getElementById("p1").innerHTML="Good Morning"; 
    }
    val=val-1;
},1000);

}

timer();