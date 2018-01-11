$(document).ready(function(){

   $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll > 10){
          $('.header13, .page13').addClass('nav-sticky');
      }
       else{
          $('.header13, .page13').removeClass('nav-sticky');
      }
   });

   /* HOME ARTICLE NAV */
   var listleft = 0;
   var listlength = $('.home__articles-list-item').length;
   var listlength = 300*(listlength-2)-50;
   $('.articles__arrow-prev').on('click', function(){
      if(listleft < -250){
         listleft += 300;
         $('.home__articles-list').css("left", listleft);
      }
   });
   $('.articles__arrow-next').on('click', function(){
      if(listleft > -listlength){
         listleft -= 300;
         $('.home__articles-list').css("left", listleft);
      }
   });

   /* ---------- POPIN */

   /* Closing */
   $('.module13__close').not('.cart .module13__close').on('click', function(){
      $('.module13__overlay').fadeOut(200);
      $('.module13').fadeOut(200);
   });
   $('.cart .module13__close').on('click', function(){
      $('.module13__overlay').fadeOut(200);
      $('.cart__popin').css("left", "100%");
      $('.cart').delay(300).hide(0);
   });
   /* Cart */
   $('.header__icons-cart').on('click', function(){
      $('.module13__overlay').fadeIn(200);
      $('.cart__popin').css("left", "100%");
      $('.cart').css("display", "flex").hide().fadeIn(0);
      $('.cart__popin').css("left", "45%");
   });
   /* Profile */
   $('.header__icons-profile').on('click', function(){
      $('.module13__overlay').fadeIn(200);
      $('.register').css("display", "flex").hide().fadeIn(200);
   });
   /* SignUp */
   $('.register__signup-link').on('click', function(){
      $('.register').fadeOut(200);
      $('.signup').css("display", "flex").hide().fadeIn(100);
   });
   /* Connect */
   $('.signup__send-connect-link').on('click', function(){
      $('.signup').fadeOut(200);
      $('.register').css("display", "flex").hide().fadeIn(100);
   });


   /* PRODUCT DELETE */
   $('.cart__content-product-delete').on('click', function(){
      $(this).closest('li').hide(300);
   });


   /* SESSION STORAGE */


   var subsession = sessionStorage.getItem('clé');

   /* Subscribe */
   if(subsession !== "true" || subsession == null){
      setTimeout(function(){
         $('.module13__overlay').fadeIn(200);
         $('.subscribe').css("display", "flex").hide().fadeIn(200);
         sessionStorage.setItem('clé', "true");
      }, 2000);
   }

});
