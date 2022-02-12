const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        logo.classList.toggle('active');
        logo.classList.toggle('active-reverse');
    });
};

$(document).ready(function() {
    $('.answer__item-title').click(function(e) {
        if ($('.answer__body').hasClass('one')) {
            $('.answer__item-title').not($(this)).removeClass('active');
            $('.answer__item-text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});