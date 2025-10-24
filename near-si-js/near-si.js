
document.addEventListener('DOMContentLoaded', function() {
    var collapseElements = document.querySelectorAll('#faq-accordion .collapse');
                collapseElements.forEach(function(collapseEl) {
                    collapseEl.addEventListener('show.bs.collapse', function () {
                        var sign = document.querySelector('.collapse-sign[data-target="#' + collapseEl.id + '"]');
                        if(sign) sign.textContent = '-';
                    });
                    collapseEl.addEventListener('hide.bs.collapse', function () {
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
});