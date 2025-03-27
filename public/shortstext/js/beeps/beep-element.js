$(document).ready(function () {
    // Calculate height
    // function updateHeight() {
    //     const ht = window.innerHeight;
    //     const svVertical2 = document.querySelector(".BepSl_cn");
    //     svVertical2.style.height = `${ht - 71}px`;

    //     if ($(window).width() <= 560) {
    //         svVertical2.style.height = `${ht}px`;
    //     }
    // }

    // if ($(window).width() <= 767) {
    //     updateHeight();
    //     window.addEventListener('resize', updateHeight, true);
    // }

    // Initialize variables
    var BepElementsVisible = false;

    // Update visibility based on active slide
    // if ($(window).width() <= 767) {
    $('.NstEl_icn-wr, NstEl_icn-wr1').click(function (e) {
        e.stopPropagation();
    });
    $('.VdElMr_wr, VdElMr_wr1,.BepDrp_rw,.VdEl_icn-wr,.VdEl_inf-wr').click(function (e) {

        e.stopPropagation();
    });
 

    $('.VdElMr_ovrly').click(function (e) {
        e.stopPropagation();
        $(this).parents('.swiper-slide-active').removeClass('js_icon-more');
        BepElementsVisible = false;
    });
    
    
    $('.VdEl_lod-rw').click(function (e) {
        e.stopPropagation();
        $(this).parents('.swiper-slide-active').removeClass('js_icon-more');
        BepElementsVisible = false;
    });



    // video Category functionality
    $(".js-VdoInf").click(function (e) {
        e.stopPropagation();

        $("body").toggleClass('VdElVdCtg_on');
        $('.NstEl_icn-wr').parents('.NstSl_li').removeClass('js_icon-more');
    });

    // Volume functionality
    $(".VdEl_icn-vol").click(function (e) {

        e.stopPropagation(); // Prevent the event from bubbling up
        $(".VdEl_icn-vol-full").css("display", function (index, value) {
            return value === "none" ? "flex" : "none";
        });
        $(".VdEl_icn-mute").css("display", function (index, value) {
            return value === "none" ? "flex" : "none";
        });
    });

    // Toggle expand functionality
    $('.VdEl_ic-exp').click(function () {
        $(this).parents('.VdEl_ic-exp-wr').toggleClass('js_VdEl_ic-exp');
    });


    // Close chat functionality
    $(".VdElCht_btn, .VdElCht_over-bg, .VdElCht_hd-icn, .VdElCht_cls").click(function (e) {
        e.stopPropagation();
        $("body").removeClass('VdElCht_on');
    });

    // Close category functionality(mobile)
    $(".VdElCtgr_cls, .VdElCtgr_ovrly").click(function (e) {
        e.stopPropagation();
        $("body").removeClass('VdElCtg_on');
    });

    // Close video category functionality(mobile)
    $(".VdElVdCtgr_cls, .VdElVdCtg_ovrly").click(function (e) {
        e.stopPropagation();
        $("body").removeClass('VdElVdCtg_on');
    });

    // Play pause functionality
    $('.VdEl_sk_pp').click(function (event) {
        event.stopPropagation();
        $(this).closest('.VdEl_sk_pp-btn').toggleClass('js_VdEl_sk_pp-act');
    });

    $(".BepBtmNv_Ctgr-lk,.BepDrp_cls").click(function () {
        $("body").toggleClass("Js-BepDrp_ovr");
    });

    $("document").click(function () {
        event.stopPropagation();

        $("body").removeClass("Js-BepDrp_ovr");
    });
   

});
