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
 
    /* POPIN */
    $('.module13__underlay, .module13__close').on('click', function(){
       $('.module13__overlay').fadeOut(200);
       $('.module13').fadeOut(200);
    });
 
    $('.header__icons-profile').on('click', function(){
       $('.module13__overlay').fadeIn(200);
       $('.register').css("display", "flex").hide().fadeIn(200);
    });
 
    $('.register__signup-link').on('click', function(){
       $('.register').fadeOut(200);
       $('.signup').css("display", "flex").hide().fadeIn(100);
    });
 
    $('.signup__send-connect-link').on('click', function(){
       $('.signup').fadeOut(200);
       $('.register').css("display", "flex").hide().fadeIn(100);
    });
 
 
 
 
 
 });
 