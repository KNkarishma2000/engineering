document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function prevSlideFunc() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.childElementCount - 1;
      }
      showSlide(currentIndex);
    }
  
    function nextSlideFunc() {
      if (currentIndex < slides.childElementCount - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }
  
    prevSlide.addEventListener('click', prevSlideFunc);
    nextSlide.addEventListener('click', nextSlideFunc);
  });
  