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
var $list = $( ".item", ".iskra1", ".iskra2", ".krug1", ".krug2", ".krug3", ".krugi1", ".krugi2", ".krugi3", ".poloski", ".poloski2", ".pryam", ".skobka1", ".skobki1", ".skobki2", ".skobki3", ".treugolnik1", ".treugolnik2", ".treugolnik3", ".G", ".k", ".q", ".W", ".clothes").length ?
$( ".item", ".iskra1", ".iskra2", ".krug1", ".krug2", ".krug3", ".krugi1", ".krugi2", ".krugi3", ".poloski", ".poloski2", ".pryam", ".skobka1", ".skobki1", ".skobki2", ".skobki3", ".treugolnik1", ".treugolnik2", ".treugolnik3", ".G", ".k", ".q", ".W", ".clothes" ) :
$(this).removeAttr("style");
$(this).appendTo(".clothes");
$(this).removeClass("item");
$(this).css({'top': '8vw', 'left':'7vw'});
});
}
