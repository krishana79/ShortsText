$(document).ready(function () {
    // Calculate height
    // function updateHeight() {
    //     const ht = window.innerHeight;
    //     const svVertical2 = document.querySelector(".NstSl_cn");


    //     if ($(window).width() <=560) {
    //         svVertical2.style.height = `${ht}px`;
    //     }
    //     if ($(window).width() > 560 && $(window).width() <= 767) {
    //         svVertical2.style.height = `${ht - 71}px`;
    //     }
    // }
    function updateHeight() {
        const ht = window.innerHeight;
        const svVertical2 = document.querySelector(".NstSl_cn");
        svVertical2.style.height = `${ht - 71}px`;

        if ($(window).width() <= 560) {
            svVertical2.style.height = `${ht}px`;
        }
    }

    if ($(window).width() <= 767) {
        updateHeight();
        window.addEventListener('resize', updateHeight, true);
    }


    // Initialize variables
    var elementsVisible = false;

    $('.NstNvHr_prv,.NstNvHr_nxt').click(function (e) {
        e.stopPropagation();

    });
    $('.day_night-wr').click(function (event) {
        event.stopPropagation(); // Stop event propagation
        $('body').toggleClass("day_night", 1000); // Toggle class over 1000 milliseconds (1 second)
    });

    $('.day_Night input').change(function () {
        if ($(this).is(':checked')) {
            $('body').addClass('day_night', 1000); // Add class over 1000 milliseconds (1 second)
        } else {
            $('body').removeClass('day_night', 1000); // Remove class over 1000 milliseconds (1 second)
        }
    });
    // Update visibility based on active slide
    if ($(window).width() <= 560) {
        $('.NstElMr_wr,.NstCrd_ttl,.NstCrd_ad-wr,.NstDcv_cn, .NstSlHr_li').click(function (e) {
            e.stopPropagation();

        });


        $(".NstSl_li-hdr").on('click', function (event) {
            //    alert("hi");
            event.stopPropagation();
            if ($(window).width() <= 560) {
                $('.NstSl_li').removeClass('js_icon-more');
                $(".NstHdr_cn").toggleClass("show");
            }
        });

        $(document).on('click', function (event) {
            //    alert("hi");
            event.stopPropagation();

            if (elementsVisible && $('.NstElMr_wr').is(':visible') && $(".NstElMr_ovrly").is(':visible')) {
                $('.NstElMr_wr').parents('.NstSl_li').removeClass('js_icon-more');
                elementsVisible = false;
            }

        });
    }
    $('.NstEl_icn-mr').click(function (ev) {
        ev.stopPropagation();
        $(this).closest('.swiper-slide-active').toggleClass('js_icon-more');

    });

    $('.NstElMr_ovrly').click(function (e) {
        e.stopPropagation();
        $(this).parents('.swiper-slide-active').removeClass('js_icon-more');
        elementsVisible = false;
    });
    // More info functionality
    $(".js-MorInf").click(function (e) {
        e.stopPropagation();

        $("body").toggleClass('VdElCht_on');
        $('.NstElMr_wr').parents('.NstSl_li').removeClass('js_icon-more');
    });

    // Volume functionality
    $(".NstEl_icn-vol").click(function (e) {

        e.stopPropagation(); // Prevent the event from bubbling up
        $(".NstEl_icn-vol-full").css("display", function (index, value) {
            return value === "none" ? "flex" : "none";
        });
        $(".NstEl_icn-mute").css("display", function (index, value) {
            return value === "none" ? "flex" : "none";
        });
    });

    // Toggle expand functionality
    $('.NstEl_ic-exp').click(function () {
        $(this).parents('.NstEl_ic-exp-wr').toggleClass('js_NstEl_ic-exp');
    });


    // Close chat functionality
    $(".VdElCht_btn, .VdElCht_over-bg, .VdElCht_hd-icn, .VdElCht_cls").click(function (e) {
        e.stopPropagation();
        $("body").removeClass('VdElCht_on');
    });

    // Play pause functionality
    $('.NstEl_sk_pp').click(function (event) {
        event.stopPropagation();
        $(this).closest('.NstEl_sk_pp-btn').toggleClass('js_NstEl_sk_pp-act');
    });
    // $(document).on('click', function (event) {
    // if (!$(event.target).closest('.NstSl_li').length) {
    // if ($(".NstSl_li").hasClass("NstSl_li-vdo")) {
    //     $(".NstCrdContr_cn").hide();
    // }
    // }
    // });

});
$(document).ready(function () {

    var heartLikeElements = document.querySelectorAll('.js-HeartLike');
    // Add event listener for overlay element
    //  var bepSlCrdElements = document.querySelectorAll('.BepSl_vdo-wr');

    //var lastTap = 0;

    // bepSlCrdElements.forEach(function(element) {
    //     element.addEventListener('dblclick', function(event) {
    //         var now = new Date().getTime();
    //         var timesince = now - lastTap;
    //         if (timesince < 600 && timesince > 0) {
    //             // Run the toggleHeart function when double tap
    //             var heartContainer = element.querySelector('.js-HeartLike');
    //             toggleHeart(heartContainer);
    //             event.preventDefault(); // Prevent default action of double-click event
    //         }
    //         lastTap = new Date().getTime();
    //     });

    //     // For mobile devices, add touchstart event listener
    //     element.addEventListener('touchstart', function(event) {
    //         var now = new Date().getTime();
    //         var timesince = now - lastTap;
    //         if (timesince < 600 && timesince > 0) {
    //             // Run the toggleHeart function when double tap
    //             var heartContainer = element.querySelector('.js-HeartLike');
    //             toggleHeart(heartContainer);
    //             event.preventDefault(); // Prevent default action of double-click event
    //         }
    //         lastTap = new Date().getTime();
    //     });
    // });



    heartLikeElements.forEach(function (element) {
        element.addEventListener('click', function () {
            toggleHeart(element);
        });
    });

    function toggleHeart(heartContainer) {
        var heartIcon = heartContainer.querySelector('.vj_icn');
        var heartUse = heartIcon.querySelector('use');

        // Toggle xlink:href attribute
        if (heartUse.getAttribute('xlink:href') === '#vj_heart') {
            heartUse.setAttribute('xlink:href', '#vj_heart-fill');
        } else {
            heartUse.setAttribute('xlink:href', '#vj_heart');
        }

        // Toggle heartscale class
        if (heartIcon.classList.contains('heartscale')) {
            heartIcon.classList.remove('heartscale');
        } else {
            heartIcon.classList.add('heartscale');
        }
    }


    // volume functionality

    function hideVlmWr() {
        $('.VdEl_vlm-wr').hide(1000);
    }

    function showVlmWr() {
        $('.VdEl_vlm-wr').show();
        setTimeout(hideVlmWr, 6000);
    }

    showVlmWr();

    $('.VdEl_mid-wr').click(function (event) {
        event.stopPropagation();

        showVlmWr();
        $(this).toggleClass('js_VdEl_sk_vlm-act');
    });

    $('.VdEl_lod-rw').click(function (event) {
        event.stopPropagation();
        $('.VdEl_vlm-wr').show();

        $('.VdEl_mid-wr').toggleClass('js_VdEl_sk_vlm-act');
    });

    //   back functionality

    $('.VdEl_top-bck').click(function (event) {
        event.stopPropagation();
        console.log("back working");
        $('.swiper-slide').removeClass('js_seek-vis-sec js_seek-vis');
        $('body').toggleClass('NstSl_vdo-vis');
        $('body').removeClass('NstSl_vdo');

    });
});