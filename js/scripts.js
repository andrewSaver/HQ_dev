document.getElementById("header").onclick = function () {
    window.location = "index.html";
}

$(document).ready(function () {
    $('.HQ_carousel').slick({
        dots: true,
        infinite: true,
        speed: 1100,
        fade: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
       
    });
});

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$('.lightbox').click(function (e) {
    if (!isMobile) {
        e.preventDefault();
        dataslide = $(this).attr('data-toggle');
        goToByScroll(dataslide);
    }
});

