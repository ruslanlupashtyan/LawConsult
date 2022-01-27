// import "flickity/dist/flickity.pkgd";
// import "flickity";
// import { Loader } from "@googlemaps/js-api-loader";

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

// (function () {
//   const flkty = new Flickity ('flickity');
//   // const utils = require('fizzy-ui-utils');
//   // var matchesSelector = require('matches-selector');

//   const slider = document.querySelector('.slider__wrapper');
//   const flktySlider = new flkty(slider, {
//     pageDots: false,
//     prevNextButtons: false,
//   });

//   // var buttonGroup = document.querySelector('.gallery-buttons');
//   // var buttons = buttonGroup.querySelectorAll('.gallery-buttons__button');
//   // buttons = utils.makeArray(buttons);

//   // buttonGroup.addEventListener('click', function (event) {
//   //   // filter for button clicks
//   //   if (!matchesSelector(event.target, '.gallery-buttons__button')) {
//   //     return;
//   //   }
//   //   var index = buttons.indexOf(event.target);
//   //   flktySlider.select(index);
//   // });
// })();