$(document).ready(function () {
    addToHomescreen();

    $('.banner-slider').slick({
        autoplay: true,
        arrows: false,
        dots: false,
    });

});

function responsiveThumbnail() {
    responsiveThumbnails('.responsive-thumbnails', '120px', '4px', '130px');
}
