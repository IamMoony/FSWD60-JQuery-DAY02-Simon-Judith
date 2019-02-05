 // var cart_items =[];

	// 	function all_items (data){
	// 		cart_items.push(data)
	// 	}

		for (var i=0; i<data.length; i++){

		  var items = data[i];

			document.getElementById("items").innerHTML += "<div class='item_Container' name='"items.itemPic"'><img src='" + items.itemPic + "'>" + "<br><p>" + items.itemName + "<br>" + items.itemPrice+ "</p></div>";

		}	

		// document.addEventListener('load',function(){all_items(items[i])}, false);
		// $("body").on("load",function(){
		// 	all_items(items[i]);
		// })