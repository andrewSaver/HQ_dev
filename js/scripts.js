document.getElementById('header').onclick = function () {
    window.location = 'index.html';
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

$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});

(function () {
    'use strict';

    window.addEventListener('load', function () {
        var form = document.getElementById('needs-validation');
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();
    

