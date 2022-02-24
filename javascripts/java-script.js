//write here your js
$(function() {
	$(".cnst").draggable();
});
$(document).ready(function(){
	$(".cnst").mouseup(function(){
	$(this).css({ 'animation' : 'move1'})
	});
});
