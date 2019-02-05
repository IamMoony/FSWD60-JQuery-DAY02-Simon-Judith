$(document).ready(function(){

// $("div.box").on('click', function() {
// 	$text = $(this).attr("text");
// 	$("#click_result").text($text);
// });

$("div.box:eq(1)").on('click', function(){
	$childBox = $(this).children();
	$($childBox).hide(1000,"linear");

});


});