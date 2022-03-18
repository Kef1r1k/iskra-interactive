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
$(".arrow").click(function(){
	if ($(".clothes").hasClass("platye")) {
		$(".clothes").removeClass("platye"),
		$(".clothes").addClass("ubka")
	}
	else {
		$(".clothes").removeClass("platye"),
		$(".clothes").removeClass("ubka"),
		$(".clothes").addClass("jeans")
	}
});
});

$(document).ready(function(){
		$(".scissors").click(function(){
			if ($(".clothes").hasClass("platye")) {
					$(".clothes").toggleClass("platyeob")
			}
else if ($(".clothes").hasClass("ubka")) {
	$(".clothes").toggleClass("ubkaob")
}
			else {
				$(".clothes").toggleClass("jeansob")
			}
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
