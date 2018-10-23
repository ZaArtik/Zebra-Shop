$(document).ready(function () {
    var HeaderTop = $('.header__top').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > HeaderTop) {
            $('.header__top').css({
                position: 'fixed',
                top: '0px',
                background: 'rgba(255, 255, 255, 1)'
            });
            $('.header__caption').css({
                marginTop: '87px'
            });
        } else {
            $('.header__top').css({
                position: 'static',
                background: 'rgba(255, 255, 255, 0.94)'
            });
            $('.header__caption').css({
                marginTop: '0'
            });
        }
    });
});