let currentIndex = 0;

function changeSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  const itemWidth = document.querySelector('.carousel-item').clientWidth;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  const translateValue = -currentIndex * itemWidth;

  carousel.style.transform = `translateX(${translateValue}px)`;
}
