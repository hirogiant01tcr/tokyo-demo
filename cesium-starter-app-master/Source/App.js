var viewer = new Cesium.Viewer('cesiumContainer');




//kml�ǂݍ���
viewer.dataSources.add(Cesium.KmlDataSource.load('http://hirogiant01tcr.github.io/tokyo-demo/cesium-starter-app-master/Source/test.kml'));



//���_�̕ύX
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});





