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