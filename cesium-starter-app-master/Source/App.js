var viewer = new Cesium.Viewer('cesiumContainer');




//kml読み込み
//viewer.dataSources.add(Cesium.KmlDataSource.load('http://hirogiant01tcr.github.io/tokyo-demo/cesium-starter-app-master/Source/test.kml'));


//kml読み込み2
viewer.dataSources.add(Cesium.KmlDataSource.load('http://hirogiant01tcr.github.io/tokyo-demo/cesium-starter-app-master/Source/1009.kml'));


//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});





