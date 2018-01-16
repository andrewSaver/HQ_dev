//Slick carousel settings

$(document).ready(function () {
    $('.HQ_carousel').slick({
        adaptiveHeight: true,
        autoplay: true,
        arrows: true,
        dots: true,
        fade: true,
        speed: 1000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    autoplay: false
                }
            }],
    });
});