$(function () {
    var timeoutIDs = [];
    var clicked = false;

    
    function updateSlideCount(swiper) {
        var currentSlideNumber = swiper.activeIndex + 1; 
        var totalSlides = swiper.slides.length;
        var slideCountElement = document.querySelector('.NstCrdContr_tx');

        slideCountElement.innerHTML = currentSlideNumber + " / " + totalSlides;
        // Calculate progress percentage
        var progressPercentage = (currentSlideNumber / totalSlides) * 100;
    
        // Update progress bar
        var progressElement = document.querySelector('.NstCrdSld_prgs');
        var circumference = progressElement.getTotalLength();
        var offset = circumference * (1 - progressPercentage / 100);
        progressElement.style.strokeDashoffset = offset;
        
    }
  
    function handleSlideChange(index) {
        var activeSlidee = $('.swiper-slide').eq(index);
        var body = $('body');
        
        if (activeSlidee.hasClass('NstSl_li-vdo')) {
          body.addClass('NstSl_vdo');
        } else {
          body.removeClass('NstSl_vdo');
        }
      }
      
      
    var parentSwiper = new Swiper('.NstSl_rw', {
        effect: 'slide',
        direction: 'vertical',
        loop: false,
        grabCursor: true,
        centeredSlides: true,
        cssMode: true,
        speed: 400,
                // slides:12,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
          },
        slidesPerView: 'auto',
        mousewheel: {
            releaseOnEdges: true,
            invert: false,
          },
        keyboard: true,
        navigation: {
            nextEl: '.NstNv_nxt',
            prevEl: '.NstNv_prv',
        },
        breakpoints: {
            768: {
                centeredSlides: true,
                cssMode: true,
                direction: 'horizontal',
                loop: false,
                slidesPerView: 1.65,
                speed: 400,
                mousewheel: true,
                keyboard: true,
            },
            1024: {
                centeredSlides: true,
                cssMode: true,
                direction: 'horizontal',
                loop: false,
                slidesPerView: 2,
                speed: 80,
                mousewheel: true,
                keyboard: true,
                grabCursor: true,

            },
            1550: {
                centeredSlides: true,
                cssMode: true,
                direction: 'horizontal',
                loop: false,
                slidesPerView: 2.6,
                speed: 80,
                mousewheel: true,
                keyboard: true,
            }
        },
        on: {
            init: function (swiper) {
                $('.swiper-slide').each(function (index) {
                    timeoutIDs[index] = setTimeout(function () {
                        handleTimeout(index);
                    }, 0);
                });
                updateSlideCount(swiper);
                playActiveSlideVideo(this);
                handleSlideChange(swiper.activeIndex);
                
            },
            slideChange: function (swiper) {
                clearTimeout(timeoutIDs[this.realIndex]);
                timeoutIDs[this.realIndex] = setTimeout(function () {
                    handleTimeout(parentSwiper.realIndex);
                }, 0);
                
                updateSlideCount(swiper);
                playActiveSlideVideo(this);
                handleSlideChange(swiper.activeIndex);

            },
            
        }
    });

    // Initialize nested Swipers
    var nestedSwipers = document.querySelectorAll('.NstSlHr_rw');
    nestedSwipers.forEach(function (nestedSwiper) {
        new Swiper(nestedSwiper, {
            direction: 'horizontal',
            loop: true,
            // centeredSlides: true,
            cssMode: true,
            grabCursor: true,
            effect: 'slide',
            slidesPerView: 1,
            mousewheel: true,
            keyboard: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                // type: 'progressbar',
                clickable: true
            },

            // Navigation arrows
            navigation: {
                prevEl: '.NstNvHr_prv',
                nextEl: '.NstNvHr_nxt',
            },
        });
    });


    function handleTimeout(index) {
        var activeSlide = $('.swiper-slide').eq(index);
        
                $('.swiper-slide').removeClass('js_icon-more');
        $(".NstHdr_cn").removeClass("show");
    //    $('body').removeClass('NstSl_vdo');
        // $('.swiper-slide').removeClass('js_seek-vis');

        activeSlide.addClass('js_seek-vis-sec');
        activeSlide.removeClass('js_swp-vis');
        if ($(window).width() <= 767) {

            if (!clicked) {
                activeSlide.addClass('js_seek-vis-sec');
                activeSlide.addClass('js_swp-vis');
                $('.VdEl_vlm-wr').show();


                setTimeout(function () {
                    activeSlide.removeClass('js_seek-vis-sec');
                    activeSlide.removeClass('js_icon-more');
                    activeSlide.removeClass('js_icon-more1');
                    $("body").removeClass('VdElCht_on');

                }, 6000);
            }
        }
        if ($(window).width() >= 767) {

            if (clicked) {
                activeSlide.addClass('js_seek-vis');
                //  activeSlide.addClass('js_swp-vis');


                setTimeout(function () {
                    activeSlide.removeClass('js_seek-vis-sec');
                    activeSlide.removeClass('js_icon-more');
                    activeSlide.removeClass('js_icon-more1');

                }, 6000);
            }
        }
    }

    function playActiveSlideVideo(swiper) {
        var activeSlide = swiper.slides[swiper.activeIndex];
        var activeSlideVideo = activeSlide.querySelector('video');
        if (activeSlideVideo) {
            activeSlideVideo.play();
        }
    }

    if ($(window).width() <= 767) {

        $('.BepSl_crd').click(function (event) {
            clicked = true;
            event.stopPropagation();

            clearTimeout(timeoutIDs[parentSwiper.realIndex]);

            $(this).parents('.swiper-slide-active').toggleClass('js_seek-vis-sec');

            if ($(this).parents('.NstSl_li').hasClass('js_seek-vis-sec')) {
                $('body').addClass('NstSl_vdo');
                // $(this).parents('body').toggleClass('xyz');

                $(this).parents('.NstSl_li').addClass('js_swp-vis').removeClass('js_seek-vis-sec');
            } else {
                $(this).parents('.swiper-slide-active').removeClass('js_swp-vis');
            }


            if ($(this).parents('.NstSl_li').hasClass('js_swp-vis')) {
                $(this).parents('.NstSl_li').addClass('js_seek-vis');
                // $(this).parents('body').toggleClass('abc');
                        // $('body').addClass('NstSl_vdo');
                        $('body').removeClass('NstSl_vdo-vis');
                        
                // $('body').removeClass('NstSl_vdo');
            } else {
                //   $(this).parents('.swiper-slide-active').removeClass('js_seek-vis');
            }
        });

    }
   
   
});
