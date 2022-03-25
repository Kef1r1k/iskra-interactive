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
$item.addClass("item");
$(".item")
})(jQuery);
$item.fadeOut(function() {
var $list = $( ".item", ".clothes").length ?
$( ".item", ".clothes" ) :
$(this).removeAttr("style");
$(this).addClass("placed").appendTo(".clothes");
$(".placed").removeClass("item");
var left = $(".placed").position().left;
var top = $(".placed").position().top;
$(".placed").css({'left': left, 'top': top});
});
}
