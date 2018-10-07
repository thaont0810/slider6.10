var slideImg = document.querySelectorAll('.item');

slideImg[0].style.left = 0;

class Slick {
  constructor(slideImg, btn_prev, btn_next) {
    this.slideImg = slideImg;
    this.btn_prev = btn_prev;
    this.btn_next = btn_next;
    this.currentSlideIndex = 0;
  }

  prevSlide() {
    var prevSlideIndex;
    if (this.currentSlideIndex === 0) {
      prevSlideIndex = this.slideImg.length - 1
    } else {
      prevSlideIndex = this.currentSlideIndex - 1;
    }

    this.slideImg[prevSlideIndex].style.left = "-100%";
    this.slideImg[this.currentSlideIndex].style.left = 0;

    this.slideImg[prevSlideIndex].setAttribute("class", "slideInLeft");
    this.slideImg[this.currentSlideIndex].setAttribute("class", "slideOutRight");

    this.currentSlideIndex = prevSlideIndex;
  }

  nextSlide() {
    var nextSlideIndex;
    if (this.currentSlideIndex === this.slideImg.length - 1) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = this.currentSlideIndex + 1;
    }

    this.slideImg[nextSlideIndex].style.left = "100%";
    this.slideImg[this.currentSlideIndex].style.left = 0;

    this.slideImg[nextSlideIndex].setAttribute("class", "slideInRight");
    this.slideImg[this.currentSlideIndex].setAttribute("class", "slideOutLeft");

    this.currentSlideIndex = nextSlideIndex;
  }
}

const slick = (a, b, c) => {
  const s = new Slick(a, b, c)
  s.btn_prev.click(() => {
    s.prevSlide();
  })

  s.btn_next.click(() => {
    s.nextSlide();
  })

}


slick(slideImg, $('.button--prev'), $('.button--next'))