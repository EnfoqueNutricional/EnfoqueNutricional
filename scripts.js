




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
        delay: 4000, // Tiempo en milisegundos entre cada cambio de slide
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
  










  const $changeTimeMonthly = document.querySelector("#changeTime__monthly");
const $changeTimeYearly = document.querySelector("#changeTime__yearly");


const $cardPricePro = document.querySelector("#cardPricePro");
const $cardPriceEnterprise = document.querySelector("#cardPriceEnterprise");
const $cardPriceTime1 = document.querySelector(".cardPrice__time--first");
const $cardPriceTime2 = document.querySelector(".cardPrice__time--second");
const $cardPriceTime3 = document.querySelector(".cardPrice__time--third");


$changeTimeYearly.addEventListener("click" , () => {
    $cardPriceTime1.textContent = "year";
    $cardPriceTime2.textContent = "year";
    $cardPriceTime3.textContent = "year";

    $cardPricePro.textContent = "$99";
    $cardPriceEnterprise.textContent = "$699";

    $changeTimeYearly.style.backgroundColor = "#4927ec";
    $changeTimeYearly.style.color = "#fff";
    $changeTimeMonthly.style.backgroundColor = "transparent";
    $changeTimeMonthly.style.color = "#000";
})

$changeTimeMonthly.addEventListener("click" , () => {
    $cardPriceTime1.textContent = "month";
    $cardPriceTime2.textContent = "month";
    $cardPriceTime3.textContent = "month";

    $cardPricePro.textContent = "$15";
    $cardPriceEnterprise.textContent = "$99";

    $changeTimeMonthly.style.backgroundColor = "#4927ec";
    $changeTimeMonthly.style.color = "#fff";
    $changeTimeYearly.style.backgroundColor = "transparent";
    $changeTimeYearly.style.color = "#000";

})



