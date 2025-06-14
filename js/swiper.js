// Swiper 1
var swiper1 = new Swiper('.slider-wrapper-1', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    620: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

// Swiper 2
var swiper2 = new Swiper('.slider-wrapper-2', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    620: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

// Swiper 3
var swiper3 = new Swiper('.slider-wrapper-3', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-3',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    620: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});
