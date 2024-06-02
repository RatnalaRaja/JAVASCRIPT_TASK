var count = 0;
var prog=document.querySelector("#progress");
var h3=document.querySelector("h3");

var int = setInterval(function() {

    if(count===100){
        h3.style.opacity=1;
        clearInterval(int);
        
    }
    count++;

    prog.style.width=count + "%";


},100)