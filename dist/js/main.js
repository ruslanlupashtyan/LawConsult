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

servicesItem = document.querySelectorAll('.services__item');

servicesItem.forEach(element => {
  element.addEventListener('click', function(){
    this.classList.toggle('detail');
    servicesButton = this.querySelector('.btn');
    if(element.classList.contains('detail')) {
      servicesButton.innerHTML = 'Стисло'
    } else {
      servicesButton.innerHTML = 'Детальніше'
    }
  })
});