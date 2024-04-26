// Navbar animation
const navbarBtn = document.querySelector("#navbar-btn");

navbarBtn.addEventListener("click", () =>{
    if (navbarBtn.parentNode.style.top === "-125px"){
        navbarBtn.parentNode.style.top = "0";
        navbarBtn.children[0].style.transform = "rotate(180deg)";
    } else {
        navbarBtn.parentNode.style.top = "-125px";
        navbarBtn.children[0].style.transform = "rotate(0)";
    }
});

// Slideshow animation
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-image");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";
}

const previousImage = document.querySelector(".prev");
const nextImage = document.querySelector(".next");
const dots = document.getElementsByClassName("dot");

setInterval(function() {
    slideIndex = (slideIndex + 1) % dots.length;
    showSlides(slideIndex);
}, 4000);
  
previousImage.addEventListener("click", () => {
    plusSlides(-1);
    showSlides(slideIndex);
});

nextImage.addEventListener("click", () => {
    plusSlides(1);
    showSlides(slideIndex);
});

for (let index = 0; index < dots.length; index++) {
    const element = dots[index];
    element.addEventListener("click", () => {
        slideIndex = index + 1;
        showSlides(slideIndex);
    });
}