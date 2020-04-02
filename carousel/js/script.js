const carouselSlides = document.querySelector(".carousel__slides");
const carouselSlidesItems = Array.from(carouselSlides.children);
const nextButton = document.querySelector(".carousel__btn--right");
const prevButton = document.querySelector(".carousel__btn--left");
const navDots = document.querySelector(".nav-dots");
const navDotsBtns = Array.from(navDots.children);

const slideWidth = carouselSlidesItems[0].getBoundingClientRect().width;
carouselSlidesItems.forEach((item, index) => {
  item.style.left = slideWidth * index + "px";
});
function moveSlide(carouselSlides, currentSlide, targetSlide) {
  carouselSlides.style.transform =
    "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}
function moveDot(currentDot, targetDot) {
  currentDot.classList.remove("current-dot");
  targetDot.classList.add("current-dot");
}

nextButton.addEventListener("click", e => {
  const currentSlide = carouselSlides.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = navDots.querySelector(".current-dot");
  const nextDot = currentDot.nextElementSibling;
  const targetIndex = carouselSlidesItems.findIndex(
    slide => slide.className == "carousel__slides__item current-slide"
  );
  if (targetIndex === carouselSlides.children.length - 1) {
    console.log(carouselSlides);
    moveSlide(carouselSlides, currentSlide, carouselSlides.children[0]);
    moveDot(currentDot, navDotsBtns[0]);
  }
  //move Slide
  moveSlide(carouselSlides, currentSlide, nextSlide);
  //highlite dot
  moveDot(currentDot, nextDot);
  console.log(targetIndex, carouselSlides.children.length);
});
prevButton.addEventListener("click", e => {
  const currentSlide = carouselSlides.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = navDots.querySelector(".current-dot");
  const prevDot = currentDot.previousElementSibling;
  const targetIndex = carouselSlidesItems.findIndex(
    slide => slide.className == "carousel__slides__item current-slide"
  );
  if (targetIndex === 0) {
    console.log(carouselSlides);
    moveSlide(
      carouselSlides,
      currentSlide,
      carouselSlides.children[carouselSlides.children.length - 1]
    );
    moveDot(currentDot, navDotsBtns[carouselSlides.children.length - 1]);
  }
  //move Slide
  moveSlide(carouselSlides, currentSlide, prevSlide);
  //highlite dot
  moveDot(currentDot, prevDot);
});

navDots.addEventListener("click", e => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;
  const currentSlide = carouselSlides.querySelector(".current-slide");
  const currentDot = navDots.querySelector(".current-dot");
  const targetIndex = navDotsBtns.findIndex(dot => dot == targetDot);
  const targetSlide = carouselSlidesItems[targetIndex];

  moveSlide(carouselSlides, currentSlide, targetSlide);
  moveDot(currentDot, targetDot);
});
