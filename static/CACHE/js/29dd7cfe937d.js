var map;function initialize(){var point=new google.maps.LatLng(28.126401,-15.43704439999999);console.log(28.126401);console.log(-15.43704439999999);console.log(point);var mapOptions={zoom:17,panControl:true,zoomControl:true,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE},mapTypeControl:true,scaleControl:true,streetViewControl:true,overviewMapControl:true,rotateControl:true,center:point,mapTypeId:google.maps.MapTypeId.ROADMAP}
map=new google.maps.Map(document.getElementById('map'),mapOptions);var marker=new google.maps.Marker({position:point,animation:google.maps.Animation.BOUNCE});marker.setMap(map);var infowindow=new google.maps.InfoWindow({content:"C/ PINTOR JUAN GUILLERMO 6-8 L 28-29 CC MINILLA"});google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});}
google.maps.event.addDomListener(window,'load',initialize);