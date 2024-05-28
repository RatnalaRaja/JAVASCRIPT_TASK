var btn = document.querySelector("button")
var im1 = document.querySelector("#one");
var im2 = document.querySelector("#two");

btn.addEventListener("click", function() {
    var imgsrc1 = im1.src;
    var imgsrc2 = im2.src;

    im1.src = imgsrc2;
    im2.src = imgsrc1;


})