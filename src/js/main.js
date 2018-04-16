$(document).ready(function () {

    //----------------------<<svg-for-ie>>----------------------\\
    (function () {
        svg4everybody();
    }());

    //----------------------<<slideshow>>----------------------\\
    (function () {
        $('.block__link').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.career'),
                display = container.find('.career__pic-img'),
                item = $this.closest('.career__item'),
                path = $this.attr('href'),
                duration = 500,
                preloader = $('.preloader');

            if (!item.hasClass('active')) {
                preloader.show();

                display.fadeOut(duration, function () {
                    $(this).attr('src', path).on('load', function () {
                        preloader.hide();
                        $(this).fadeIn(duration);
                    });
                });

                item.addClass('active')
                    .siblings()
                    .removeClass('active');
            }
        });
    }());
});