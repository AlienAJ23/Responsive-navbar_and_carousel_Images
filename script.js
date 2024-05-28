let menuList = document.getElementById("navItems");
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "300px";
  }else{
    menuList.style.maxHeight = "0px";
  }
}


let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

setInterval(() => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}, 2000);
