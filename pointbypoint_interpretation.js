var allpoints = ee.FeatureCollection("users/yshao/depots");


var points = allpoints.map(function(feature){
    var num = ee.Number.parse(feature.get('Id'));
    return feature.set('Id', num);
  });

var roi = points.filter(ee.Filter.eq('Id',4598));
print(roi)


var naipCollection = ee.ImageCollection('USDA/NAIP/DOQQ')
  .filterBounds(roi)
  .filterDate('2019-01-01', '2019-12-31');
print(naipCollection)
var naip = naipCollection.mosaic();
print(naip)


var trueColor = naip.select(['R', 'G', 'B']);
var trueColorVis = {
  min: 0.0,
  max: 255.0,
};
//Map.setCenter(-73.12, 41.16, 12);
var defaultMap = Map;
defaultMap.centerObject(roi, 16);
Map.addLayer(trueColor, trueColorVis, 'True Color');


var fcVis = roi.style({
  color: '1e90ff',
  width: 2,
  fillColor: '00000000',  // with alpha set for partial transparency
  lineType: 'dotted',
  pointSize: 10,
  pointShape: 'circle'
});
Map.addLayer(fcVis, null, 'Collection-wide style');

//Map.addLayer(roi,'apoint');


