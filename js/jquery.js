
// nav sldie down
$(function(){
    $('.main_nav>ul>li').mouseover(function(){
        $('.sub_menu').stop().slideUp();
        $(this).children('.sub_menu').stop().slideDown();
    });
    $('.main_nav>ul>li').mouseout(function(){
        $('.sub_menu').stop().slideUp();
    });

    $('.sub_menu>li').mouseover(function(){
        $('.drop_down').stop().slideUp();
        $(this).children('.drop_down').slideToggle();
    });
    $('.sub_menu>li').mouseout(function(){
        $('.drop_down').stop().slideUp();
    });
});

 // .header-scrolled
 $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 50) {
    $('#header').addClass('header-scrolled');
  };

  $(window).scroll(function(){
    if($(this).scrollTop()>50){
      $('.main_logo').hide();
      $('.main_logo_black').show();
      $('.main_menu').css("background","#fff");
      $('.main_nav>ul>li>span>a').css("color","#333");
    } else {
      $('.main_logo').show();
      $('.main_logo_black').hide();
      $('.main_menu').css("background","transparent");
      $('.main_nav>ul>li>span>a').css("color","#fff");
    }
  });

  // ghost btn click
  $(function(){

    $('.ghost_btn').click(function(){
      $('.right_menu').addClass('on');
      // $('.side_bg').css("display","block");
      $('body').addClass('off-canvas-sidebar-open');
    });
    $('.close_btn').click(function(){
      $('.right_menu').removeClass('on');
      // $('.side_bg').css("display","none");
      $('body').removeClass('off-canvas-sidebar-open');
    });
    // $('.side_bg').click(function(){
    //   $('.right_menu').removeClass('on');
    //   $('.side_bg').css("display","none");
    // });
    $('.ghost_btn_slide_down').click(function(){
      $('.main_nav').stop().slideToggle();
    });
  });

  
  