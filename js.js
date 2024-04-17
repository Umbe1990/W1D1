function sparisciA(){
const a =document.querySelector("aside > :nth-child(3) ol li:nth-child(2) a")
a.style.display="none"
}
window.onload=sparisciA

function button(){

 alert("MARCO");

}
const primoAlert=document.querySelector(".blog-post:nth-of-type(1) .blog-post-meta a");
primoAlert.addEventListener('mouseover',button);




function button1(){

    alert("IACOPO")
}
    const secondoAlert=document.querySelector(".blog-post:nth-of-type(2) .blog-post-meta a");
    secondoAlert.addEventListener('mouseover',button1);


function button3(){
    alert("CHRISTIAN")
}
const terzoAlert=document.querySelector(".blog-post:nth-of-type(3) .blog-post-meta a");
terzoAlert.addEventListener('mouseover',button3);
