 // var cart_items =[];

	// 	function all_items (data){
	// 		cart_items.push(data)
	// 	}
	$(document).ready(function(){
		for (var i=0; i<data.length; i++){
		   var items = data[i];

			$("#items").append("<div class='item_Container' name='"+ items.itemName +"' price='"+items.itemPrice+"' amount='0'><div class='item_single'><img id='"+items.itemNo+"' src='" + items.itemPic + "'>" + "<br><p>" + items.itemName + "<br>" + items.itemPrice+ "</p></div></div>");

		}

		var item = $("#items").attr("id");
		$("#items").append(item)
	});
		

		// document.addEventListener('load',function(){all_items(items[i])}, false);
		// $("body").on("load",function(){
		// 	all_items(items[i]);
		// })