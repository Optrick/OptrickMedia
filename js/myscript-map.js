var gMapAPIKey = 'AIzaSyCIRAL2hNFanesB5Lo1Dw9yQ9NRIYtbVaA';

var map;
function initMap() {
  var quebecLocation = {lat: 46.81956011145282, 
                  lng: -71.32686845670753};
  var SaguenayLocation = {lat: 48.548302,  
                  lng: -71.6587549};
  var GaspesieLocation = {lat: 48.8445157,  
                  lng: -67.5305758};
  var centerPoint = {lat: 47.82095236703228,  
                  lng: -69.87896974375002};

  map = new google.maps.Map(document.getElementById('map'), {
      'center' : centerPoint,
      'zoom' : 6,
      'mapTypeId' : google.maps.MapTypeId.ROADMAP,
      'draggable' : false,
      'scroolwheel' : false
  });

  var infoContentQc = '<a href="#"><i class="icon-envelope"></i>418 997-8689</a><br>';
      infoContentQc += '14, rue du Domaine<br>';
      infoContentQc += 'Sainte-Anne-de-Beaupré, Qc<br>';
      infoContentQc += 'G0A 3C0';

  var infoContentSag = '<a href="#"><i class="icon-envelope"></i>418 482‐1620</a><br>';
      infoContentSag += '1015, rue Duguay<br>';
      infoContentSag += 'Alma, Qc<br>';
      infoContentSag += 'G8B 1W4';

  var infoContentGasp = '<a href="#"><i class="icon-envelope"></i>418 932-7082</a><br>';
      infoContentGasp += '########<br>';
      infoContentGasp += 'Matane, Qc<br>';
      infoContentGasp += 'G0A 3C0';

  var infoWindowQC = new google.maps.InfoWindow({
        content: infoContentQc
      }),
      infoWindowSag = new google.maps.InfoWindow({
        content: infoContentSag
      }),
      infoWindowGasp = new google.maps.InfoWindow({
        content: infoContentGasp
      });


  var markerQc = new google.maps.Marker({
      'position' : quebecLocation,
      'map' : map,
      'title' : 'Aqua Ingenium Québec'
    });

  var markerSag = new google.maps.Marker({
      'position' : SaguenayLocation,
      'map' : map,
      'title' : 'Aqua Ingenium Saguenay Lac St-Jean'
    });

  var markerGasp = new google.maps.Marker({
      'position' : GaspesieLocation,
      'map' : map,
      'title' : 'Aqua Ingenium Bas St-Laurent'
    });

  markerQc.addListener('click', function() {
    infoWindowQC.open(map, markerQc);
  });

  markerSag.addListener('click', function() {
    infoWindowSag.open(map, markerSag);
  });

  markerGasp.addListener('click', function() {
    infoWindowGasp.open(map, markerGasp);
  });
}