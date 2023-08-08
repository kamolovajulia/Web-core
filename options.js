    let slides  = document.querySelectorAll('.swiper-slide');
    let showAll = document.querySelector('.show-all__link');
    let wrapper = document.querySelector('.swiper-wrapper');
    function show_first () {  
        if (showAll.dataset.all=="false") {
            wrapper.style.height='100%';
            
            showAll.dataset.all="true";
            showAll.textContent='Скрыть';
        } else {
            wrapper.style.height='166px';
            showAll.dataset.all="false";
            showAll.textContent='Показать все';
        };
    }
    var swiper = new Swiper(".swiper-container", {
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