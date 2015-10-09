var viewer = new Cesium.Viewer('cesiumContainer');




//kml“Ç‚İ‚İ
//viewer.dataSources.add(Cesium.KmlDataSource.load('http://hirogiant01tcr.github.io/tokyo-demo/cesium-starter-app-master/Source/test.kml'));


//kml“Ç‚İ‚İ2
viewer.dataSources.add(Cesium.KmlDataSource.load('http://hirogiant01tcr.github.io/tokyo-demo/cesium-starter-app-master/Source/1009.kml'));



//‹“_‚Ì•ÏX
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});





