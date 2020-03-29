
$(function() {
$(".list").hover(function(){
    $(this).css('border-bottom','1px solid cornsilk'
    )
},
function(){
    $(this).css('border-bottom','0px');
});
$('.sns-list a').hover(
    function(){

$(this).animate({
    'font-size':'28px'
},100);
},function(){
    $(this).animate({
        'font-size':'20px'
    },100);

})
$('.my').click(function(){

    var $answer = $(this).find('.res-open');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find("span").text("+");
      
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
      
        $(this).find("span").text("-");
     
      
    }
  });
});
