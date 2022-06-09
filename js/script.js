var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  ScrollReveal().reveal('.swiper', { 
    origin: 'top' ,
    distance: '60px' ,
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal('.categoriesblock', { 
    origin: 'top' ,
    distance: '60px' ,
    duration: 2500,
    delay: 400,
    interval: 100,
  });

  ScrollReveal().reveal('.aboutleft', { 
    origin: 'left' ,
    distance: '60px' ,
    duration: 2500,
    delay: 400,
  });


  ScrollReveal().reveal('.aboutright', { 
    origin: 'right' ,
    distance: '60px' ,
    duration: 2500,
    delay: 400,
  });


  ScrollReveal().reveal('.trick-content', { 
    origin: 'top' ,
    distance: '60px' ,
    duration: 2500,
    delay: 400,
    interval: 100,
  });


  ScrollReveal().reveal('.discountleft', { 
    origin: 'left' ,
    distance: '60px' ,
    duration: 2500,
    delay: 400,
  });


  ScrollReveal().reveal('.discountright', { 
    origin: 'right' ,
    distance: '60px' ,
    duration: 2500,
    delay: 400,
  });