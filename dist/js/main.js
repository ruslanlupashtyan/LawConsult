

let gmap = document.querySelector('#map');
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

let screenWidth = this.documentElement.clientWidth;


let header = document.querySelector('.header');
window.addEventListener('scroll', function(){

  var scroll = window.scrollY
if (screenWidth > 768) {
  if (scroll >= 125) {
    header.classList.add('dark')
  } else {
    header.classList.remove('dark')
  }
} else {
  if (scroll >= 10) {
    header.classList.add('dark')
  } else {
    header.classList.remove('dark')
  }
}

})

// hamburger
let body = document.querySelector('body');
let hamburger = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.header__nav_mobile');
hamburger.addEventListener('click', function(){
  mobileMenu.classList.toggle('hidden');
  header.classList.toggle('darker')
  body.classList.toggle('overflow-hidden')
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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          draggable: true,
          arrows: false,
        }
      },
    ]
  });

  let activeSlides = document.querySelectorAll('.slick-active');

  // let screenWidth = this.documentElement.clientWidth;
  if (typeof activeSlides[0] !== 'undefined' && typeof activeSlides[0] !== null) {
    if (screenWidth >= 992) {
      console.log(screenWidth);
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
  }




  servicesItem = document.querySelectorAll('.services__item');
    for(let i = 0; i < servicesItem.length; i++) {
      servicesItem[i].addEventListener('click', function(){
        if (screenWidth >= 992) {
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
        }

      let button = document.querySelectorAll('.services__button');
      console.log(button)
      if(screenWidth < 992) {
        let showItem = document.querySelector('.show');
        if(!this.classList.contains('show')) {
          if(showItem) {
            showItem.classList.remove('show');
          }
          this.classList.add('show');
        } else {
          console.log(showItem);
          this.classList.remove('show');
        }
      }
    })
  }
})
