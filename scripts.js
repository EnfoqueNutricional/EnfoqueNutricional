




document.addEventListener('DOMContentLoaded', function () {
    const swiperEl = document.querySelector('.swiper-container');
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      initialSlide: 0,
      autoplay: {
        delay: 3000, // Tiempo en milisegundos entre cada cambio de slide
        disableOnInteraction: false, // Continuar la reproducción automática después de la interacción del usuario
      },
    });
  
    document.querySelector('.slide-1')?.addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(0, 0);
    });
  
    document.querySelector('.slide-250')?.addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(249, 0);
    });
  
    document.querySelector('.slide-500')?.addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(499, 0);
    });
  
    let prependNumber = 2; // Define a number to track prepends
    document.querySelector('.prepend-2-slides')?.addEventListener('click', function (e) {
      e.preventDefault();
      swiper.virtual.prependSlide([
        'Slide ' + --prependNumber,
        'Slide ' + --prependNumber,
      ]);
    });
  
    let appendNumber = 1; // Define a number to track appends
    document.querySelector('.append-slide')?.addEventListener('click', function (e) {
      e.preventDefault();
      swiper.virtual.appendSlide('Slide ' + ++appendNumber);
    });
  });
  







  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');
  
    if (menuToggle && headerNav) {
      menuToggle.addEventListener('click', function () {
        headerNav.classList.toggle('active');
      });
    } else {
      console.error('Elementos no encontrados');
    }
  });
  



