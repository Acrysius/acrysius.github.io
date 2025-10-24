document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.team-carousel-track');
  const items = document.querySelectorAll('.team-carousel-item');
  const prevBtn = document.querySelector('.team-carousel-btn.prev');
  const nextBtn = document.querySelector('.team-carousel-btn.next');
  let visibleCount = window.innerWidth < 768 ? 1 : 3;
  let currentIndex = 0;
  let isTransitioning = false;

  function getVisibleCount() {
    return window.innerWidth < 768 ? 1 : 3;
  }

  function getMaxIndex() {
    return items.length - getVisibleCount();
  }

  function updateCarousel() {
    visibleCount = getVisibleCount();
    // Clamp currentIndex so it doesn't go out of bounds
    if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
    if (currentIndex < 0) currentIndex = 0;
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  function handleArrowClick(direction) {
    if (isTransitioning) return;
    isTransitioning = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    if (direction === 'prev') {
      if (currentIndex <= 0) {
        currentIndex = getMaxIndex();
      } else {
        currentIndex -= 1;
      }
    } else if (direction === 'next') {
      if (currentIndex >= getMaxIndex()) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
    }
    updateCarousel();
  }

  prevBtn.addEventListener('click', function() {
    handleArrowClick('prev');
  });

  nextBtn.addEventListener('click', function() {
    handleArrowClick('next');
  });

  // Listen for transition end to re-enable buttons
  track.addEventListener('transitionend', function() {
    isTransitioning = false;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  });

  window.addEventListener('resize', updateCarousel);

  updateCarousel();
});