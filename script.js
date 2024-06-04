//window scroll
$(window).on("scroll",function(){
    var scrollTop=$(window).scrollTop();
    if(scrollTop >=100){
        $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header')
    }
});

//Document Ready
$(document).ready(function(){
    // One Page Scroll
    $.scrollIt({
      
        easing: 'linear',      // the easing function for animation
        topOffset: -70         // offste (in px) for fixed top navigation
      });

});