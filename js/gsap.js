var $logo = $('.logo');
$logo.on('click', function(e){
 TweenMax.to($(this), 0.3, {x:'+=100px'});
});
//TweenMax.to(".logo", 1.5, {scale:1, xPercent:45});