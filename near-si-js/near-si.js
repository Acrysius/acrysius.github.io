
document.addEventListener('DOMContentLoaded', function() {
    // Dropdown active state management
    var collapses = document.querySelectorAll('#faq-accordion .collapse');
    collapses.forEach(function(collapseEl) {
        // When a dropdown is shown, remove .active from all, then add to the current
        collapseEl.addEventListener('show.bs.collapse', function () {
            document.querySelectorAll('.dropdown-title, .dropdown-item').forEach(function(el) {
                el.classList.remove('active');
            });
            var row = collapseEl.previousElementSibling;
            if (row) {
                var title = row.querySelector('.dropdown-title, .dropdown-item');
                if (title) title.classList.add('active');
            }
            var sign = document.querySelector('.collapse-sign[data-target="#' + collapseEl.id + '"]');
            if(sign) sign.textContent = '-';
        });
        // When a dropdown is hidden, remove .active from the current
        collapseEl.addEventListener('hide.bs.collapse', function () {
            var row = collapseEl.previousElementSibling;
            if (row) {
                var title = row.querySelector('.dropdown-title, .dropdown-item');
                if (title) title.classList.remove('active');
            }
            var sign = document.querySelector('.collapse-sign[data-target="#' + collapseEl.id + '"]');
            if(sign) sign.textContent = '+';
        });
    });
    // Carousel autoplay controls
    var carousel = document.querySelector('#landing-carousel');
    var playPauseBtn = document.getElementById('carousel-play-pause');
    var playIcon = document.getElementById('carousel-play-icon');
    var pauseIcon = document.getElementById('carousel-pause-icon');
    var bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
    var isPlaying = true;

    function updatePlayPauseIcons() {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = '';
        } else {
            playIcon.style.display = '';
            pauseIcon.style.display = 'none';
        }
    }

    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            bsCarousel.pause();
            isPlaying = false;
        } else {
            bsCarousel.cycle();
            isPlaying = true;
        }
        updatePlayPauseIcons();
    });

    // Start with autoplay enabled
    updatePlayPauseIcons();

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

  const sections = ['services', 'about', 'portfolio'];
    const navLinks = sections.map(id => document.querySelector('.nav-text a[href="#' + id + '"]'));

    function onScroll() {
        let scrollPos = window.scrollY || window.pageYOffset;
        let found = false;
        sections.forEach((id, idx) => {
            const section = document.getElementById(id);
            if (section) {
                const offset = section.offsetTop - 80; // adjust for navbar height
                const nextSection = sections[idx + 1] ? document.getElementById(sections[idx + 1]) : null;
                const nextOffset = nextSection ? nextSection.offsetTop - 80 : document.body.scrollHeight;
                if (scrollPos >= offset && scrollPos < nextOffset) {
                    navLinks.forEach(link => link && link.classList.remove('active-section'));
                    if (navLinks[idx]) navLinks[idx].classList.add('active-section');
                    found = true;
                }
            }
        });
        if (!found) navLinks.forEach(link => link && link.classList.remove('active-section'));
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // run on load

    // Swipe support for team carousel on mobile

    let touchStartX = null;
    let touchEndX = null;

    function handleSwipe() {
        if (window.innerWidth > 767) return; // Only on mobile
        if (touchStartX !== null && touchEndX !== null) {
            const diff = touchEndX - touchStartX;
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    prevBtn.click();
                } else {
                    nextBtn.click();
                }
            }
        }
        touchStartX = null;
        touchEndX = null;
    }

    if (track) {
        track.addEventListener('touchstart', function(e) {
            if (e.touches.length === 1) {
                touchStartX = e.touches[0].clientX;
            }
        });
        track.addEventListener('touchend', function(e) {
            if (e.changedTouches.length === 1) {
                touchEndX = e.changedTouches[0].clientX;
                handleSwipe();
            }
        });
    }

  
});

function overlayOff(){
    document.getElementsByClassName("overlay-menu").style.display="none";
  }

  function overlayOn(){
    document.getElementsByClassName("overlay-menu").style.display="block"
  }