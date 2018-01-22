//Header link to index

document.getElementById('header').onclick = function () {
    window.location = 'index.html';
}

//Caption fade-in animate.css

$('figure-caption').addClass('animated fadeInUp');


//Return-to-top function

$(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
        $('#return-to-top').fadeIn(200);

    } else {
        $('#return-to-top').fadeOut(200);
    }
});

$('#return-to-top').click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 600); 
});
    

