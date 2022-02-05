// change bg in header
let header = document.querySelector('.header');
window.addEventListener('scroll', function(){
  var scroll = window.scrollY
  if (scroll >= 125) {
    header.classList.add('dark')
  } else {
    header.classList.remove('dark')
  }
})

// hamburger
let hamburger = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.header__nav_mobile');
hamburger.addEventListener('click', function(){
  mobileMenu.classList.toggle('hidden');
  header.classList.toggle('darker')
});

// change button in services
if (document.getElementsByClassName('services').length) {
  let buttonsWrapper = document.querySelector('.services__buttons');
  let buttonIndividual = buttonsWrapper.querySelector('.button-individual');
  let buttonLegalentity = buttonsWrapper.querySelector('.button-legalentity');
  let individualServices = document.querySelector('.individual__items');
  let legalentityServices = document.querySelector('.legalentity__items');
  buttonLegalentity.addEventListener('click', function(){
    if (!this.classList.contains('active')) {
      this.classList.add('active');
      buttonIndividual.classList.remove('active');
      legalentityServices.classList.remove('hidden');
      individualServices.classList.add('hidden');
    }
  })
  
  buttonIndividual.addEventListener('click', function(){
    if (!this.classList.contains('active')) {
      this.classList.add('active');
      buttonLegalentity.classList.remove('active');
      legalentityServices.classList.add('hidden')
    individualServices.classList.remove('hidden');
    }
  })
}
let gmap = document.querySelector('#map');
console.log(gmap);
if(typeof gmap !== undefined || typeof gmap !== null) {
  function initMap() {
    var options = {
    zoom: 15,
    center: { lat: 48.29395550421818, lng: 25.936907913631526}, 
    }
    var map = new google.maps.Map(document.getElementById("map"), options);
    new google.maps.Marker({
      position: { lat: 48.29395550421818, lng: 25.936907913631526},
      map,
      title: "Maryan Ivan",
    });
  }
}


$(function(){
  $(".slider__wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: $('.slider-button.prev'),
    nextArrow: $('.slider-button.next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }

    ]
  });

  // let slider = document.querySelector('.slider');
  let activeSlides = document.querySelectorAll('.slick-active');

  // if (typeof slider !== 'undefined' && typeof slider !== null) {
  if (typeof activeSlides[0] !== 'undefined' && typeof activeSlides[0] !== null) {
    activeSlides[1].classList.add('current');
    $('.slider-button.next').on('click', function(){
      let active = document.querySelectorAll('.slick-active');
      active[1].classList.add('current');
      active[0].classList.remove('current');
      active[2].classList.remove('current');
    });
    $('.slider-button.prev').on('click', function(){
      let active = document.querySelectorAll('.slick-active');
      active[1].classList.add('current');
      active[0].classList.remove('current');
      active[2].classList.remove('current');
    });
  }
})
let images = [
  {
    url: '../images/services/0101.webp'
  },
  {
    url: '../images/services/0102.webp'
  },
  {
    url: '../images/services/0103.webp'
  },
  {
    url: '../images/services/0104.webp'
  },
  {
    url: '../images/services/0105.webp'
  },
  {
    url: '../images/services/0106.webp'
  },
  {
    url: '../images/services/0107.webp'
  },
  {
    url: '../images/services/0108.webp'
  },
  {
    url: '../images/services/0109.webp'
  },
  {
    url: '../images/services/0110.webp'
  },
  {
    url: '../images/services/0111.webp'
  },
  {
    url: '../images/services/0112.webp'
  },
  {
    url: '../images/services/0201.webp'
  },
  {
    url: '../images/services/0202.webp'
  },
  {
    url: '../images/services/0203.webp'
  },
  {
    url: '../images/services/0204.webp'
  },
  {
    url: '../images/services/0205.webp'
  },
  {
    url: '../images/services/0206.webp'
  },
  {
    url: '../images/services/0207.webp'
  },
  {
    url: '../images/services/0208.webp'
  },
  {
    url: '../images/services/0209.webp'
  },
]
console.log(images);

servicesItem = document.querySelectorAll('.services__item');
console.log(servicesItem[0]);

for(let i = 0; i < servicesItem.length; i++) {
  servicesItem[i].addEventListener('click', function(){
    // open modal
    let modal = document.querySelector('.drop-modal');
    let body = document.querySelector('body');
    body.classList.add('overflow-hidden')
    modal.classList.add('show');

    console.log(this.getAttribute('style'));

    // get modal inmodalation
    let nodeTitle = this.querySelector('.services__title');
    let nodeText = this.querySelector('.services__text');
    let nodeBg = this.getAttribute('style');

    // create items
    let modalInner = document.createElement('div');
    let modalTitle = document.createElement('div');
    let modalText = document.createElement('div');

    
    modal.setAttribute('style', nodeBg);
    modalInner.prepend(modalText);
    modalInner.prepend(modalTitle);
    modalInner.setAttribute('class', 'modal-inner container');
    modalTitle.setAttribute('class', 'modal__title');
    modalText.setAttribute('class', 'modal__text');

    modalTitle.innerHTML = nodeTitle.innerHTML;
    modalText.innerHTML = nodeText.innerHTML;

    modal.prepend(modalInner);


    // close modal
    let buttonClose = document.querySelector('button.close');
    buttonClose.addEventListener('click', function(){
      modal.classList.remove('show');
      body.classList.remove('overflow-hidden')

      setTimeout(()=>{
        modalInner.remove();
      }, 1000)
    })
  })
}