const btn = document.querySelector('.show-all');
const showAll = document.querySelector('.show-all__link');
const arrow = document.querySelector('.arrow');
const wrapper = document.querySelector('.swiper-wrapper');

btn.addEventListener('click', function () {  
    if (btn.dataset.all=='false') {
        wrapper.classList.add('swiper-wrapper_full-height');
        arrow.classList.add('transform');
        btn.dataset.all='true';
        showAll.textContent='Скрыть';
    } else {
        wrapper.classList.remove('swiper-wrapper_full-height');
        arrow.classList.remove('transform');
        btn.dataset.all='false';
        showAll.textContent='Показать все';
    };
});

let swiper = new Swiper(".swiper-container", {
    slidesPerView: 1.1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        400:{
            slidesPerView:1.5,
        },
        500:{
            slidesPerView:1.8,
        },
        600:{
            slidesPerView:2.3,
        },
        700:{
            slidesPerView:2.5,
        },
        768:{
            slidesPerView:11,
        },
    },
});