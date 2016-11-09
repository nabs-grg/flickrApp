$(document).ready(function(){ //once everything is loaded in the page start executing jQuery code

	var flickr_api = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var req = {
		tags : "wembley",
		format : "json"
	};

	$.getJSON(flickr_api,req,function(data){
		console.log("success");
		console.log(data);

		var db = $(document.body);
		db.append('<h3>' + data.title + '</h3>');

		console.log(data.title);

		$.each(data.items,function(index,value){
			console.log("=============================================================================");
			db.append("<br />");
			db.append('<img src="' + value.media.m + '" >' + "<br />");

		});
	});

});	



