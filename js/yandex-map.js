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

  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {},
        { iconLayout: "default#image",
          iconImageHref: "../img/map-marker.png",
          iconImageSize: [231, 190],
          iconImageOffset: [-2, -4]
        });

  myMap.geoObjects.add(myPlacemark);
}
