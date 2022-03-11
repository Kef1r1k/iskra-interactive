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
setInterval(function() {
    	$('.paint').click(function(e){
      let colors = [
        "#FF6100",
        "#5DB6CA",
        "#FFD101",
        "#FFFFFF"  ];

let randomItem = colors[Math.floor(Math.random()*colors.length)];
$('.clothes').css({'background-color':randomItem});
});1000
  });
	});

$( function() {
	var $constants = $( ".constants" ),
       $clothes = $( ".clothes" );

			 $clothes.droppable({
			      accept: ".constants > .cnst",
						classes: {
			 "ui-droppable-active": "ui-state-highlight"
		 },
			      drop: function( event, ui ) {
			        deleteImage( ui.draggable );
			      }
			    });
				});

		    function deleteImage( $item ) {
		      $item.fadeOut(function() {
		        var $list = $( ".iskra1", ".clothes").length ?
		          $( ".iskra1", ".clothes" ) :
							$(".iskra1" ).removeAttr("style");
		          $(".iskra1" ).appendTo( ".clothes");
		      });
		    }
