let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dotsContainers = document.getElementsByClassName("dots-container");

// Create a dot element for each slide
for (let i = 0; i < slides.length; i++) {
  const dotsContainer = dotsContainers[i];
  for (let j = 0; j < slides.length; j++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }
}

showSlides();

function showSlides() {
  const dotsContainers = document.getElementsByClassName("dots-container");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dotsContainers.length; i++) {
    const dots = dotsContainers[i].getElementsByClassName("dot");
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000); // Change slide every 2 seconds
}
