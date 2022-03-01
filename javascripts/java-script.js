//write here your js
$(document).ready(function(){
	$(".eraser").click(function(){
	$("body").addClass("cursor")
	});
});

$(function() {
	$(".cnst, .move").draggable();
});
$(document).ready(function(){
	$(".cnst, .move").mouseup(function(){
	$(this).css({ 'animation' : 'move1'})
	});
});
$(document).ready(function(){
	$(".cnst").click(function(){
	if($("body").hasClass("cursor")){
		$(this).hide();
	}
	});
});
