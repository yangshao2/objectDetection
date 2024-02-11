var buslocation1 = ee.FeatureCollection("users/yshao/de"),
    fishnet = ee.FeatureCollection("users/yshao/fishnets/fishnet_10"),
    bus = /* color: #99ff99 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32467398342726, 38.58581709053824],
                  [-75.32476853129504, 38.5857819722214],
                  [-75.3247705429518, 38.58577096498424],
                  [-75.32473198158372, 38.58578048832015],
                  [-75.32467967850793, 38.585803026943836]]]),
            {
              "classname": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32469443065752, 38.58583971771145],
                  [-75.3247903196298, 38.58580407525174],
                  [-75.324735334345, 38.58580826848322],
                  [-75.324690407344, 38.58582504140667]]]),
            {
              "classname": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32558830719846, 38.58508275079154],
                  [-75.32569090169328, 38.5850392455636],
                  [-75.325684866723, 38.58502299661625],
                  [-75.32558294278043, 38.58507017096931]]]),
            {
              "classname": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32568017285722, 38.58521536295032],
                  [-75.32576332133668, 38.58516032631337],
                  [-75.32567950230496, 38.58519544493421],
                  [-75.32567682009595, 38.58520540394295]]]),
            {
              "classname": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.61732976641916, 38.651105128389915],
                  [-75.61740486827158, 38.65109151278757],
                  [-75.61740620937609, 38.6510799918913],
                  [-75.61732708421015, 38.6510936074958]]]),
            {
              "classname": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.61740352716707, 38.651050665965066],
                  [-75.61739682164453, 38.6510391450622],
                  [-75.61732708421015, 38.651049618610344],
                  [-75.61732306089662, 38.651057997447744]]]),
            {
              "classname": 1,
              "system:index": "5"
            })]),
    urban = /* color: #9999ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.3248151483461, 38.585371266762294],
                  [-75.32490634345261, 38.585333527440575],
                  [-75.32484733485428, 38.58524127568176],
                  [-75.32478832625596, 38.585287401575975]]]),
            {
              "classname": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32575203681388, 38.585519703625316],
                  [-75.3258271386663, 38.58549454413172],
                  [-75.3258083632032, 38.585440031865346],
                  [-75.3257010748426, 38.585460998126536],
                  [-75.32571180367866, 38.58549454413172]]]),
            {
              "classname": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32615718379976, 38.585207078585064],
                  [-75.32624569669726, 38.585211271851385],
                  [-75.3261625482178, 38.585150469465596],
                  [-75.32615450159075, 38.58517982234792]]]),
            {
              "classname": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.3268116427994, 38.5853790023039],
                  [-75.32687869802477, 38.585372712418994],
                  [-75.32686796918871, 38.58532448994979],
                  [-75.32682773605349, 38.5853559393899]]]),
            {
              "classname": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.3264944263773, 38.585036848969715],
                  [-75.32655879939365, 38.58502007586218],
                  [-75.32653465951252, 38.585011689306945],
                  [-75.32647296870518, 38.58497814307619],
                  [-75.32646760428715, 38.585011689306945]]]),
            {
              "classname": 2,
              "system:index": "4"
            })]),
    veg = /* color: #ffff99 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32667681659031, 38.58507668508442],
                  [-75.32677874053287, 38.58505991198619],
                  [-75.32673582518863, 38.58502217250082],
                  [-75.32668486321735, 38.58504104224598],
                  [-75.32668218100834, 38.58505781534864]]]),
            {
              "classname": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32701477492618, 38.58499491619352],
                  [-75.3270711013155, 38.58497604643625],
                  [-75.32703355038929, 38.58493201698332],
                  [-75.32695308411884, 38.58496346659531],
                  [-75.32695844853687, 38.58499072291456]]]),
            {
              "classname": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32518550837803, 38.58516264715138],
                  [-75.32528475011158, 38.58514587407322],
                  [-75.3252713390665, 38.58507039517304],
                  [-75.32520696605015, 38.58509555481526],
                  [-75.32516405070591, 38.58512490772003]]]),
            {
              "classname": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.32353594983387, 38.585011689306945],
                  [-75.32369151795673, 38.58502426913942],
                  [-75.32365664923954, 38.58492363041781],
                  [-75.3238197784855, 38.584840779849515]]]),
            {
              "classname": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-75.61348332811576, 38.64904003846721],
                  [-75.61359061647636, 38.64906098614646],
                  [-75.61354233671409, 38.648960437230265],
                  [-75.61348332811576, 38.64897719539276]]]),
            {
              "classname": 3,
              "system:index": "4"
            })]);


            var naipCollection = ee.ImageCollection('USDA/NAIP/DOQQ')
            .filterBounds(fishnet)
            .filterDate('2018-01-01', '2018-12-31');
          var naip = naipCollection.mosaic();
          var bands = ['R', 'G', 'B','N']
          
          
          var trueColorVis = {
            min: 0.0,
            max: 255.0,
          };
          
          //Map.centerObject(roi, 17);
          Map.addLayer(naip, trueColorVis, 'True Color');
          Map.addLayer(buslocation1,{palette:['red']},'buslocation');
          
          
          
          
          
          //merge training polygons
          var points = veg.merge(bus).merge(urban)
          var label = 'classname';
          
          // Overlay the points on the imagery to get training.
          var training = naip.select(bands).sampleRegions({
          collection: points,
            properties: [label],
            scale: 1
          });
          
          // Train a CART classifier with default parameters.
          var trained = ee.Classifier.smileCart().train(training, label, bands);
          var trained = ee.Classifier.smileRandomForest(50)
                                      .train(training, label);
          
          
          
          
          var naipCollectionnew = ee.ImageCollection('USDA/NAIP/DOQQ')
            .filterBounds(fishnet)
            .filterDate('2018-01-01', '2018-12-31');
          var naipnew = naipCollectionnew.mosaic();
          var bands = ['R', 'G', 'B','N']
          
          
          // Classify the image with the same bands used for training.
          
          var proid_map = fishnet.map(function(feature){
              var num = ee.Number.parse(feature.get('newid'));
              return feature.set('newid', num);
            });
          
          
          for (var i=1;i<=1;i++){
          //var roi = proid_map.filter(ee.Filter.eq('newid', i));
          
          
          var roi = fishnet
          var naipsub = naip.clip(roi)
          //var naipsub = naipnew.clip(roi)
          var classified = naipsub.select(bands).classify(trained);
          
          
          //var msmask = ms.unmask().eq(0)
          //var msmask_sub = msmask.clip(roi)
          
          
          //ndvi mask
          var naipNDVI = naipsub.normalizedDifference(['N', 'R']);
          var ndvimean = naipNDVI.reduceNeighborhood({
            reducer: ee.Reducer.mean(),
            kernel: ee.Kernel.circle(10),
          });
          
          var ndvithresh = ndvimean.lt(0.1).selfMask()
          var nir = naipsub.select(['N']).gt(168).selfMask()
          var nnmask = ndvithresh.updateMask(nir)
          var nnmask_sub=nnmask.clip(roi)
          
          
          //naip classification mask
          //var naipc = classified.lt(3)
          //apply masks
          //var classified_new = classified.updateMask(msmask_sub);
          //var classified_new = classified.updateMask(roadmask);
          //var classified_new = classified_new.updateMask(urbanmask);
          var classified_new = classified.updateMask(nnmask_sub);
          //var classified_new = classified_new.updateMask(nnmask);
          //var classified_new = classified_new.eq(1).selfMask()
          var classified_new = classified_new.eq(1).selfMask();
          
          var fileid = 'bus_de'+i;
          //Export.image.toDrive({
          //image: classified_new,
           // folder:'de',
          //description: fileid,
          //region: roi,
           // scale: 1,
          // maxPixels: 1e13,
          //});
          
          var trueColorVis = {
            min: 0.0,
            max: 255.0,
          };
          
          //Map.centerObject(roi, 17);
          //Map.addLayer(naipsub, trueColorVis, 'True Color');
          //Map.addLayer(buslocation1,{palette:['red']},'buslocation');
          Map.addLayer(classified_new,
                      {min: 1, max: 4, palette: ['red','yellow','grey','green']},
                   'classification');   
                       
                       
                       
          }
          //Export.table.toAsset({
          //collection: points,
          //description: 'trainingdata_me',
          //  assetId: 'trainingdata_me'
          //});
          
          
          //var output=classified_new.toDouble() 
          //Export.image.toDrive({
          //  image: classified_new,
          //description: 'bus_nc12',
          //region: roi,
          //  scale: 1,
          // maxPixels: 1e13,
          //});
          
          //Export.table.toDrive({
          //  collection: urban,
          //  description: 'urban',
          //  fileFormat: 'SHP'
          //});
          //
          