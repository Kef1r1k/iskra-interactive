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
