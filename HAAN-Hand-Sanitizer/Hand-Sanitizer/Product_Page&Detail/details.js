var item;
arr = JSON.parse(localStorage.getItem('productArr')) || [];
document.addEventListener("DOMContentLoaded", function() {
  getData()
  function getData(){
    item = JSON.parse(localStorage.getItem("detailData"));
    // console.log(item);
    showData(item);
  }
  
  function showData(data){
    console.log(data.image);
    var image = document.createElement("img");
    image.src = data.image;
    
    var h1 = document.getElementById("detailTitle");
    h1.textContent = data.title;
    
    var price = document.getElementById("detailPrice");
    price.textContent = data.price;

    var imageContainer = document.querySelector(".slide");
    imageContainer.appendChild(image);
  }
  document.getElementById("addtocart").addEventListener("click", storeData);
  function storeData() {
    console.log(item)
    arr.push(item);
    localStorage.setItem('productArr', JSON.stringify(arr));
  }
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
   
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          
        }
      }
    }
  }
  //image
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  
  let slideIndex = 0;
  
  function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index < 0) {
      slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
      slideIndex = 0;
    }
  
    // slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  
  function prevSlide() {
    showSlide(slideIndex - 1);
  }
  
  function nextSlide() {
    showSlide(slideIndex + 1);
  }
  
  // prevButton.addEventListener('click', prevSlide);
  // nextButton.addEventListener('click', nextSlide);
  
  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
  