'use strict';

(function($) {
    function scrollTo(selector,element) {
        var el = $(element),
            elPos = el.offset().top,
            $scrollBtn = $(selector);

        $scrollBtn.on('click', function(el) {
            el.preventDefault();
            $('html, body').animate({scrollTop: elPos},500);
        });
    }
    $(document).ready(function() {
        //scrollTo('.box','.login_box_wrapper');
        scrollTo('.leaders','.leaders-tittle');
        scrollTo('.competition','.leaders-competition');
        scrollTo('.about','.about-tittle');
        scrollTo('.contact','.contact-title');

    });

})(jQuery);