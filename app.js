let year = new Date();
let copyYear = document.querySelector("#copy-year");
let btnMenu = document.querySelector(".fas");
let menu = document.querySelector(".nav-links");
let scrollBtn = document.querySelector(".scroll-button");
let slides = document.querySelectorAll(".caousel-items");
let bulletsContainer = document.querySelector(".carousel-bullets");
let currentPos = 0;

copyYear.textContent = year.getFullYear();

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("show-links");
});

scrollBtn.addEventListener("click", () => {
  window.scroll(0, 0);
});

for (let i = 0; i < slides.length; i++) {
  let bullets = document.createElement("span");
  bullets.classList.add("bullet");
  bulletsContainer.append(bullets);
}

//give current bullet class to the first bullet onload
bulletsContainer.children[currentPos].classList.add("current-bullet");

//update the bullets and slides function
function updateslides(currentpos) {
  for (let slide of slides) {
    slide.classList.remove("current-slide");
  }
  for (let bullet of bulletsContainer.children) {
    bullet.classList.remove("current-bullet");
  }
  slides[currentpos].classList.add("current-slide");
  bulletsContainer.children[currentpos].classList.add("current-bullet");
}

//add click and update pos of the current bullet
bulletsContainer.childNodes.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    updateslides(index);
    currentPos = index;
  });
});

//next slide event click
document.querySelector(".next-slide").addEventListener("click", () => {
  if (currentPos < slides.length - 1) {
    currentPos++;
  } else {
    currentPos = 0;
  }
  updateslides(currentPos);
});

//prev slide event click
document.querySelector(".prev-slide").addEventListener("click", () => {
  if (currentPos > 0) {
    currentPos--;
  } else {
    currentPos = slides.length - 1;
  }
  updateslides(currentPos);
});
