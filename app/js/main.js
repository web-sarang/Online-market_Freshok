$(function() {
  $('.top-slider__inner').slick({
    arrows: true,
    dots: false,
    fade: true,
    // autoplay: true,
    // autplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.03833 17.0149L17.0516 31.6079C17.5771 32.1307 18.4293 32.1307 18.9548 31.6079C19.4802 31.0851 19.4802 30.2369 18.9548 29.7141L3.90702 16L18.9534 2.2859C19.4789 1.76309 19.4789 0.914839 18.9534 0.392073C18.428 -0.130695 17.5758 -0.130695 17.0503 0.392072L1.037 14.9851C0.756927 15.2638 0.636852 15.6332 0.655559 15.9986C0.638145 16.3654 0.758182 16.7348 1.03833 17.0149Z" fill="#505050"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9639 14.9851L2.95058 0.392105C2.42511 -0.130702 1.5729 -0.130702 1.04743 0.392105C0.521952 0.914872 0.521952 1.76312 1.04743 2.28593L16.0952 16L1.04876 29.7141C0.523285 30.2369 0.523285 31.0852 1.04876 31.6079C1.57423 32.1307 2.42644 32.1307 2.95187 31.6079L18.9652 17.0149C19.2453 16.7362 19.3653 16.3668 19.3466 16.0014C19.3641 15.6346 19.244 15.2652 18.9639 14.9851Z" fill="#505050"/></svg></button>'
  })

  $('.catalog').on('click', function(){
    $('.catalog__list').toggleClass('catalog__list--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
    // $('body').toggleClass('lock');
  });


  var mixer = mixitup('.top-products__content');

});
