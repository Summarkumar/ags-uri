
var hamburgerIcon = document.getElementById("hamburgerIcon");
var navItems = document.getElementById("navItems");
var hamburgerControl = false;


function showMenu(){
   if (!hamburgerControl){
      hamburgerIcon.firstElementChild.className = "fa-solid fa-times";
      navItems.style.width = "100%";
      hamburgerControl = true;
   }else{
      hamburgerIcon.firstElementChild.className = "fa-solid fa-bars";
      navItems.style.width = "0%";
      hamburgerControl = false;
   }
}


var firstComment = document.getElementById("firstComment");

// firstComment.style.marginLeft = "-50px";

function move(){

}
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
