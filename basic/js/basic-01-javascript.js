$(document).ready(function(){

$("div.box").on('click', function() {
	$text = $(this).attr("text");
	$("#click_result").text($text);
});

});