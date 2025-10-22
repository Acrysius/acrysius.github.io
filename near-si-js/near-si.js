
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.team-carousel-track');
  const items = document.querySelectorAll('.team-carousel-item');
  const prevBtn = document.querySelector('.team-carousel-btn.prev');
  const nextBtn = document.querySelector('.team-carousel-btn.next');
  const visibleCount = 3;
  let currentIndex = 0;
  const maxIndex = items.length - visibleCount;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  prevBtn.addEventListener('click', function() {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
  });

  nextBtn.addEventListener('click', function() {
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});
