var swiper = new Swiper(".certificates-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  grid: {
    rows: 2,
  },
  pagination: {
    el: ".certificates-slider .swiper-pagination",
    type: "progressbar",
  },
});

var swiper1 = new Swiper(".testimonials-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".testimonials-slider .swiper-button-next",
    prevEl: ".testimonials-slider .swiper-button-prev",
  },
});

var swiper2 = new Swiper(".project-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 2.7,
  spaceBetween: 0,
  navigation: {
    nextEl: ".project-slider .swiper-button-next",
    prevEl: ".project-slider .swiper-button-prev",
  },
});



document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');

      trigger.addEventListener('click', function() {
        const parent = this.parentNode;

        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.accordion-item-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});


