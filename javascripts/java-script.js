//write here your js

$(document).ready(function(){
	$(".eraser").click(function(){
	$("body").toggleClass("cursor")
	});
});
$(document).ready(function(){
	$(".invert").click(function(){
	$("body").toggleClass("inversia")
	});
});
$(document).ready(function(){
	$(".scissors").click(function(){
	$("path").attr('d', "M0.321663 0L0 0.178862L0.06 0.1875L0.0506262 0.231419H0.105455L0.0997114 0.282376H0.148796V0.333333L0.321663 0.221545L0 1L0.12 0.952703L0.189091 1L0.274545 0.952703L0.344545 1L0.416364 0.952703L0.5 1L0.583636 0.952703L0.655455 1L0.725455 0.952703L0.810909 1L0.88 0.952703L1 1L0.678337 0.221545L0.851204 0.333333V0.282376H0.900289L0.894545 0.231419H0.949374L0.94 0.1875L1 0.178862L0.678337 0L0.5 0.124155L0.321663 0Z")
	});
});

$(document).ready(function(){
	$(".cnst").click(function(){
	if($("body").hasClass("cursor")){
		$(this).remove();}
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
	 drop: function( event, ui ) {
			        deleteImage( ui.draggable );
			      }
			    });
				});

		    function deleteImage( $item ) {
					(function($) {
      $item.addClass("placed")
     })(jQuery);
		      $item.fadeOut(function() {
		        var $list = $( ".placed", ".clothes").length ?
		          $( ".placed", ".clothes" ) :
							$(".placed").removeAttr("style");
		          $(".placed").appendTo( ".clothes");
							$(".placed").removeAttr("style");
		      });
		    }
