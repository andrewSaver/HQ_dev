// Wait for page to load

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('home-page', true);
    show('loading', false);
});

//Header link to index

document.getElementById('header').onclick = function () {
    window.location = 'index.html';
}

//Caption fade-in animate.css

$('figure-caption').addClass('animated fadeInUp');


// Back-to-top function


    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1100) {
                $('#back-to-top').fadeIn(200);
            } else {
                $('#back-to-top').fadeOut(200);
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').on('click touch', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
});
    
// Floating email UI

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#email-box').fadeIn(200);
        } else {
            $('#email-box').fadeOut(200);
        }
    });
});


