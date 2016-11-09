$(document).ready(function(){ //once everything is loaded in the page start executing jQuery code

	
	$('#flickr-search').click(function(){

		var flickrTag = $('#flickr-tag').val();
		console.log(flickrTag);


		var flickr_api = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

		var req = {
			
			tags : flickrTag, 
			format : "json"

		};

		$.getJSON(flickr_api,req,function(data){
			console.log("success");
			console.log(data);

			var flickrAdd = $(document.body);
			$('#tag-info').html(data.title);

			console.log(data.title);

			$.each(data.items,function(index,value){
				
				flickrAdd.append("<br />");
				flickrAdd.append('<img src="' + value.media.m + '" >' + "<br />");

			});
		});

		$('#flickr-tag').val('');

	});

});	



