const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click" , () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
})) 

 // JavaScript for image slideshow
 const imageSlider = document.getElementById('bestSellersSlider');
 const imageContainers = document.querySelectorAll('.image-container');
 let currentIndex = 0;

 function showNextImages() {
     for (let i = 0; i < imageContainers.length; i++) {
         imageContainers[i].style.display = 'none';
     }
     for (let i = currentIndex; i < currentIndex + 4; i++) {
         if (i < imageContainers.length) {
             imageContainers[i].style.display = 'block';
         }
     }
     currentIndex += 4;
     if (currentIndex >= imageContainers.length) {
         currentIndex = 0;
     }
 }

 showNextImages();
 setInterval(showNextImages, 3000);

let bool  = localStorage.getItem("login")
// console.log(bool);
if(bool == "true"){
console.log("d");
  let name  = localStorage.getItem("name");
  document.querySelector(".logini").innerHTML = name
}
