var form =document.querySelector("form");

// var inp1=document.querySelector("#inp1");
// var inp2=document.querySelector("#inp2");

var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

// form.addEventListener("submit",function(e){
//     e.preventDefault();

//     if(inp1.value==="" || inp2.value===""){
//         h4.textContent="Error,Some Fields are Empty";
//         h4.style.color="red";
//     }
//     else{
//         h4.textContent="";
//     }
// })


form.addEventListener("submit", function(e){
    e.preventDefault();
    for(var i=0;i<inps.length;i++){
        if(inps[i].value.trim()===''){

            h4.textContent="Error,Some Fields Are Empty";
            h4.style.color="red";
            break;
        }
        else{
            h4.textContent="";
        }
    }

})