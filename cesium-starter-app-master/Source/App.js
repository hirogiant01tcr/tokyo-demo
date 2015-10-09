var viewer = new Cesium.Viewer('cesiumContainer');



//kml“Ç‚Ýž‚Ý2
viewer.dataSources.add(Cesium.KmlDataSource.load('https://raw.githubusercontent.com/hirogiant01tcr/tokyo-demo/gh-pages/cesium-starter-app-master/Source/1009.kml'));



//Ž‹“_‚Ì•ÏX
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});





