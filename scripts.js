




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
  


document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener la consulta ingresada
    var consulta = document.getElementById('consulta').value.trim();
    
    // Asegúrate de reemplazar el número de teléfono con tu número de WhatsApp
    var telefono = ''; // Reemplaza con tu número en formato internacional
    
    if (consulta) {
        // Construir la URL de WhatsApp Web
        var url = 'https://web.whatsapp.com/send?phone=' + telefono + '&text=' + encodeURIComponent(consulta);
        
        // Redirigir a la URL de WhatsApp Web
        window.open(url, '_blank');
    } else {
        alert('Por favor, escribe tu consulta.');
    }
});



function myFunc() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Formato de 12 horas
  var period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // La hora '0' debe mostrarse como '12'

  // Asegurar que minutos y segundos tengan dos dígitos
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Construir la cadena de tiempo
  var time = hours + ":" + minutes + ":" + seconds + " " + period;

  // Mostrar el tiempo en el elemento con id 'display-time'
  document.getElementById('display-time').innerHTML = time;
}

// Llamar a la función inmediatamente y luego cada segundo
myFunc();
setInterval(myFunc, 1000);

window.onscroll = function() {
  var backToTop = document.querySelector('.back-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTop.style.display = 'block';
  } else {
      backToTop.style.display = 'none';
  }
};