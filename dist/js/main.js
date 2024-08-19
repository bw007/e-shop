"use strict";
function createSwiper(selector, delay, breakpoints) {
    return new Swiper(selector, {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: delay,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: breakpoints,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
const breakpointsDefault = {
    360: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1280: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
};
const breakpointsSlider4 = {
    520: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};
const swiper1 = createSwiper("#slider1", 3500, breakpointsDefault);
const swiper2 = createSwiper("#slider2", 2500, breakpointsDefault);
const swiper3 = createSwiper("#slider3", 3000, breakpointsDefault);
const swiper4 = createSwiper("#slider4", 4000, breakpointsSlider4);
