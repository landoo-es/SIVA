var map;function initialize(){var point=new google.maps.LatLng(28.096622,-15.41414199999997);console.log(28.096622);console.log(-15.41414199999997);console.log(point);var mapOptions={zoom:17,panControl:true,zoomControl:true,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE},mapTypeControl:true,scaleControl:true,streetViewControl:true,overviewMapControl:true,rotateControl:true,center:point,mapTypeId:google.maps.MapTypeId.ROADMAP}
map=new google.maps.Map(document.getElementById('map'),mapOptions);var marker=new google.maps.Marker({position:point,animation:google.maps.Animation.BOUNCE});marker.setMap(map);var infowindow=new google.maps.InfoWindow({content:"CALLE LECTORAL FEO RAMOS, 14LAS PALMAS"});google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});}
google.maps.event.addDomListener(window,'load',initialize);