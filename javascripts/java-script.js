//write here your js
$(function() {
	$(".cnst, .move").draggable();
});
$(document).ready(function(){
	$(".cnst, .move").mouseup(function(){
	$(this).css({ 'animation' : 'move1'})
	});
});

$(document).ready(function(){
	$(".eraser").click(function(){
	$("body").addClass("cursor")
	});
});

$(document).ready(function(){
	$(".cnst").click(function(){
	if($("body").hasClass("cursor")){
		$(this).hide();}
	});
});

$(document).ready(function(){
$('.paint').click(function() {
  $('.plt').css({'fill':'#FF6100'});
});
});
