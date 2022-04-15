$(function() {
  $('.top-slider__inner').slick({
    arrows: true,
    dots: false,
    fade: true,
    // autoplay: true,
    // autplaySpeed: 2000,
    prevArrow: $('.slider-arrow--prev'),
    nextArrow: $('.slider-arrow--next')
  })

  $('.catalog').on('click', function(){
    $('.catalog__list').toggleClass('catalog__list--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

   $('.user-nav__btn--cart').on('click', function(){
    $('.cart').addClass('cart--active');
  });

   $('.cart__close-btn').on('click', function(){
    $('.cart').removeClass('cart--active');
  });

  $('.cart__clear-btn').on('click', function(){
    $('.cart__item').addClass('cart__item--remove');
  });

  var containerEl1 = document.querySelector('[data-ref="top-product-mixitup"]');
  var containerEl2 = document.querySelector('[data-ref="promo-mixitup"]');

  var mixer1 = mixitup(containerEl1, {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'mix-filter',
      elementFilter: 'btn',
      delineatorElement: '__',
      delineatorModifier: '--'
    }
  });

  var mixer2 = mixitup(containerEl2, {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'mix-filter',
      elementFilter: 'btn',
      delineatorElement: '__',
      delineatorModifier: '--'
    }
  });

});
