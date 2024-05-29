var home = document.querySelector("#Home");
var About = document.querySelector("#About");
var Contact = document.querySelector("#Contact");

var home_text = document.querySelector("#About_Home");
var About_text = document.querySelector("#About_About");
var Contact_text = document.querySelector("#About_Contact");

home_text.style.display="block";
home_text.style.width ="50% ";

home.addEventListener("click", function(e){
    remove();
    home_text.style.display="block";
    home_text.style.width ="50% ";

})

About.addEventListener("click", function(e){
    remove();
    About_text.style.display="block";
    About_text.style.width ="50% ";

})

Contact.addEventListener("click", function(e){
    remove();
    Contact_text.style.display="block";
    Contact_text.style.width ="50%";
})

function remove(){
    document.querySelectorAll("h3").forEach(function(h3) {
        h3.style.display="none";
    });

}