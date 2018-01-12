document.getElementById("header").onclick = function () {
    window.location = "index.html";
}

$(document).ready(function () {
    $('.HQ_carousel').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        fade: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
       
    });
});

