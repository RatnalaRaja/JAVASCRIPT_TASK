var btn=document.querySelector("button");
var p=document.querySelector("p");

btn.addEventListener("click",function(e){
    p.textContent="Changed through Button";
    console.log('ccc')
})