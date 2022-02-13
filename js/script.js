const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const wrapper = document.querySelector('.wrapper');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        logo.classList.toggle('active');
        logo.classList.toggle('active-reverse');
        if (document.body.classList.contains('lock')) {
            wrapper.style.paddingRight = lockPaddingValue;
        } else {
            wrapper.style.paddingRight = "0px";
        }
    });
};
const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
console.log(lockPaddingValue);

$(document).ready(function () {
    $('.answer__item-title').click(function (e) {
        if ($('.answer__body').hasClass('one')) {
            $('.answer__item-title').not($(this)).removeClass('active');
            $('.answer__item-text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
