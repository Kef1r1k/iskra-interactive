//write here your js
$(window).on("load", function() {
	$(".overlay").fadeIn(297,	function(){
		$(".v1").css({'display':'block'})
		});
	});
$(function(){
	$(".buttonok").click( function(){
		$(".hello").animate({opacity: 0}, 297, function(){
			$(this).css({'display':'none'});
			$(".overlay").fadeOut(297);
		});
	  });
		});

$(function(){
	$(".eraser").click(function(){
	$("body").toggleClass("cursor")
	});
});
$(function(){
	$(".invert").click(function(){
	$("body").toggleClass("inversia")
	});
});
$(function(){
$(".right").click(function(){
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

$(function(){
$(".left").click(function(){
	if ($(".clothes").hasClass("platye")) {
		$(".clothes").removeClass("platye"),
		$(".clothes").addClass("jeans")
	}
	else if ($(".clothes").hasClass("ubka")) {
		$(".clothes").removeClass("jeans"),
		$(".clothes").removeClass("ubka"),
		$(".clothes").addClass("platye")
	}
	else{
		$(".clothes").removeClass("jeans"),
		$(".clothes").removeClass("platye"),
		$(".clothes").addClass("ubka")
	}
});
});

$(function(){
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


$(function(){
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



	$(function(){
$(".gotovo").one('click', (function(){
$(".clothes").css({'animation':'none'}),
$(".constants").css({'animation':'fall 1s ease-out'}),
$(".constants").css({'opacity':'0'}),
	setTimeout(function(){
		$(".overlay").fadeIn(297,	function(){
			$(".v2").css({'display':'block', 'opacity':'1'})
		});
},1300);
$(".gotovo").remove(),
$(".order").css({'display':'block'})
}));
});

$(function(){
$(".order").click(function(){
$(".clothes").css({'animation':'slide 1s ease-out'}),
setTimeout(function(){
$(".clothes").css({'opacity':'0'})
},1000);
});
});
