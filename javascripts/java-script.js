//write here your js

$(document).ready(function(){
	$(".eraser").click(function(){
	$("body").toggleClass("cursor")
	});
});

$(document).ready(function(){
	$(".cnst").click(function(){
	if($("body").hasClass("cursor")){
		$(this).hide();}
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
$('.paint').click(function() {
  if ($('.plt').css({'fill':'white'})) {
  	$('.plt').css({'fill':'#FF6100'});};
});
});

$(document).ready(function(){
setInterval(function() {
    	$('.paint').click(function(e){
      let colors = [
        "#FF6100",
        "#5DB6CA",
        "#FFD101",
        "#FFFFFF"  ];

let randomItem = colors[Math.floor(Math.random()*colors.length)];
$('.plt').css({'fill':randomItem});
});1000
  });
	});
$(function(){
	$( ".clothes" ).droppable({
		tolerance: "touch",
	  drop: function() {
	   alert("yeah");
	$(this).appendTo(".clothes")
	  }
	});
	});
