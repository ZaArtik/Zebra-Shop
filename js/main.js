$(document).ready(function () {
    var HeaderTop = $('.header__top').offset().top;
    var w = screen.width;

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
            if ($(window).width() <= '768') {
                $('.header__caption').css({
                    marginTop: '73px'
                });
            }
            if ($(window).width() <= '480') {
                $('.header__caption').css({
                    marginTop: '62px'
                });
            }
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