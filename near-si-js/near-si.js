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
            });