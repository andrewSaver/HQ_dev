//Slick carousel settings

$(document).ready(function () {
    $('.HQ_carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        respondTo: 'slider',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    autoplay: false,
                    fade: false,
                    swipe: true,
                    speed: 200,
                    lazyLoad: 'ondemand',
                    mobileFirst: true
                }
            }],
    });
});