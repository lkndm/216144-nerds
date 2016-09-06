ymaps.ready(init);

function init() {

  var myMap = new ymaps.Map("map", {
    center: [59.938937, 30.319541],
    zoom: 17,
    controls: []
  });

  myMap.behaviors.disable("scrollZoom");

  myMap.controls.add("zoomControl", {
    position: {top: 15, left: 15}
  });

  var myPlacemark = new ymaps.Placemark([59.938632, 30.323076], {},
        { iconLayout: "default#image",
          iconImageHref: "../img/map-marker.png",
          iconImageSize: [231, 190],
          iconImageOffset: [-50, -200]
        });

  myMap.geoObjects.add(myPlacemark);
}
