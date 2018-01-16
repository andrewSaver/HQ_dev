//Slick carousel settings

$(document).ready(function () {
    $('.HQ_carousel').slick({
        dots: true,
        infinite: true,
        speed: 1100,
        fade: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    autoplay: false
                }
            }
        ]
    });
});