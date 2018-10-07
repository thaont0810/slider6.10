var slideImg = document.querySelectorAll('.item');
var currentSlideIndex = 0;

slideImg[0].style.left = 0;

$('.button--prev').click(function () {
  prevSlide();
})

function prevSlide() {
  var prevSlideIndex;
  if (currentSlideIndex === 0) {
    prevSlideIndex = slideImg.length - 1
  } else {
    prevSlideIndex = currentSlideIndex - 1;
  }

  slideImg[prevSlideIndex].style.left = "-100%";
  slideImg[currentSlideIndex].style.left = 0;

  slideImg[prevSlideIndex].setAttribute("class", "slideInLeft");
  slideImg[currentSlideIndex].setAttribute("class", "slideOutRight");

  currentSlideIndex = prevSlideIndex;
}

$('.button--next').click(function () {
  nextSlide();
})

function nextSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === slideImg.length - 1) {
    nextSlideIndex = 0;
  } else {
    nextSlideIndex = currentSlideIndex + 1;
  }

  slideImg[nextSlideIndex].style.left = "100%";
  slideImg[currentSlideIndex].style.left = 0;

  slideImg[nextSlideIndex].setAttribute("class", "slideInRight");
  slideImg[currentSlideIndex].setAttribute("class", "slideOutLeft");

  currentSlideIndex = nextSlideIndex;
}