function initMap() {
	var latlong1 = {lat: 51.509865, lng: -0.118092};

	var latlong2 = {lat: 48.864716, lng: 2.349014};

	var latlong3 = {lat: 41.390205, lng: 2.154007};

	var latlong4 = {lat: 37.392529, lng: -5.994072};

	var latlong5 = {lat: 40.416775, lng: -3.703790};

	var latlong6 = {lat: 43.769562, lng:  11.255814};

	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 10, 
	center: latlong

}); // ends map


	var marker = new google.maps.Marker({
		position: latlong1, 
		map:map
		
}); 

	var marker = new google.maps.Marker({
		position: latlong2, 
		map:map
		
}); 

	var marker = new google.maps.Marker({
		position: latlong3, 
		map:map
		
}); 

	var marker = new google.maps.Marker({
		position: latlong4, 
		map:map
		
}); 

	var marker = new google.maps.Marker({
		position: latlong5, 
		map:map
		
});

	var marker = new google.maps.Marker({
		position: latlong6, 
		map:map
		
});  


}