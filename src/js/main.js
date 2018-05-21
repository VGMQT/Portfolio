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

    //----------------------<<acco>>----------------------\\
    (function () {
        var flag = true;

        $('.blog__acco-link').on('click', function (e) {
            e.preventDefault();
            var
                $this = $(this),
                container = $this.closest('.blog__acco'),
                item = $this.closest('.blog__acco-item'),
                currentContent = item.find('.blog__acco-desc'),
                duration = 500;

            if(flag){
                flag = false;
                if(!item.hasClass('active')){
                    item.addClass('active')
                        .siblings()
                        .removeClass('active')
                        .find('.blog__acco-desc')
                        .slideUp(500);
                    currentContent.slideDown(duration, function () {
                        flag = true;
                    });
                } else{
                    item.removeClass('active');
                    currentContent.slideUp(duration, function () {
                        flag = true;
                    });
                }
            }
        });
    }());

    //----------------------<<magnific>>----------------------\\
    (function () {
        var lg = $(".solo-pic");

        lg.lightGallery({
            width: '90%',
            addClass: 'solo-img',
            getCaptionFromTitleOrAlt: false
        });

        lg.on('onSlideClick.lg',function(){
            $(this).data('lightGallery').destroy(false);
        });
    }());

    (function () {
        var gal = $('.gallery');

        gal.lightGallery({
            hideBarsDelay: 1000,
            appendCounterTo: '.lg-inner',
            getCaptionFromTitleOrAlt: false
        });

        gal.on('onSlideClick.lg',function(){
            $(this).data('lightGallery').destroy(false);
        });
    }());

    //----------------------<<slider>>----------------------\\
    (function () {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        })
    }());

});